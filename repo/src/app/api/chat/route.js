import { NextResponse } from 'next/server';
import { AI_SYSTEM_PROMPT } from '@/data/botConfig';

export const runtime = 'edge';

// Server-side proxy for the chatbot's AI fallback.
// The browser must NEVER hold the Anthropic key, and calling api.anthropic.com
// directly from the client only works inside Claude artifacts — in production
// it fails CORS/auth and every AI answer silently errored out. This route
// keeps the key server-side (set ANTHROPIC_API_KEY in Vercel env vars).
export async function POST(req) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'not_configured' },
      { status: 503 },
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  const messages = Array.isArray(body?.messages) ? body.messages.slice(-8) : [];
  if (messages.length === 0) {
    return NextResponse.json({ error: 'no_messages' }, { status: 400 });
  }

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: AI_SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: 'upstream_error' }, { status: 502 });
    }

    const data = await upstream.json();
    const text = data?.content?.[0]?.text || '';
    return NextResponse.json(
      { text },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch {
    return NextResponse.json({ error: 'fetch_failed' }, { status: 502 });
  }
}
