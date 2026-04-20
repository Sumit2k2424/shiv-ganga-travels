'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { SITE } from '@/data/packages';
import {
  BOT_NAME, BOT_TAGLINE, BOT_AVATAR,
  QUICK_QUESTIONS, CUSTOM_QA, AI_SYSTEM_PROMPT,
} from '@/data/botConfig';

/* ── Finds a custom answer or returns null ─────────────────────── */
function findCustomAnswer(text) {
  const lower = text.toLowerCase();
  for (const item of CUSTOM_QA) {
    if (item.keywords.some(kw => lower.includes(kw.toLowerCase()))) {
      return item.answer;
    }
  }
  return null;
}

/* ── Formats markdown-lite text (bold, bullets) ───────────────── */
function formatText(text) {
  return text
    .split('\n')
    .map((line, i) => {
      // Bold: **text**
      const bolded = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Bullet lines
      if (bolded.startsWith('•') || bolded.startsWith('✅') || bolded.startsWith('⚠️') || bolded.startsWith('❌') || bolded.match(/^[0-9]️⃣/)) {
        return `<div key="${i}" style="padding:2px 0">${bolded}</div>`;
      }
      return `<span key="${i}">${bolded}<br/></span>`;
    })
    .join('');
}

/* ── Message bubble ───────────────────────────────────────────── */
function Bubble({ msg }) {
  const isBot = msg.role === 'bot';
  return (
    <div style={{
      display: 'flex',
      justifyContent: isBot ? 'flex-start' : 'flex-end',
      marginBottom: 10,
      gap: 8,
      alignItems: 'flex-end',
    }}>
      {isBot && (
        <div style={{
          width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, var(--navy), var(--teal))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, color: '#fff',
        }}>
          {BOT_AVATAR}
        </div>
      )}
      <div style={{
        maxWidth: '78%',
        padding: msg.typing ? '10px 14px' : '10px 14px',
        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
        background: isBot ? '#fff' : 'var(--navy)',
        color: isBot ? 'var(--text)' : '#fff',
        fontSize: 13,
        lineHeight: 1.6,
        boxShadow: isBot ? 'var(--shadow)' : 'none',
        border: isBot ? '1px solid var(--border)' : 'none',
        wordBreak: 'break-word',
      }}>
        {msg.typing ? (
          <TypingDots/>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}/>
        )}
        {!msg.typing && (
          <div style={{
            fontSize: 10, marginTop: 4, opacity: 0.5, textAlign: 'right',
          }}>
            {msg.time}
          </div>
        )}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '2px 0' }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: '50%',
          background: 'var(--text-muted)',
          animation: `typingBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
        }}/>
      ))}
    </div>
  );
}

/* ── Main ChatBot component ───────────────────────────────────── */
export default function ChatBot() {
  const [open,    setOpen]    = useState(false);
  const [msgs,    setMsgs]    = useState([]);
  const [input,   setInput]   = useState('');
  const [loading, setLoading] = useState(false);
  const [unread,  setUnread]  = useState(1);
  const [started, setStarted] = useState(false);
  const endRef   = useRef(null);
  const inputRef = useRef(null);

  const now = () => new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });

  /* Greeting message on first open */
  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      setUnread(0);
      const greeting = {
        role: 'bot',
        text: `Namaste! 🙏 I am the **${BOT_NAME}** for Shiv Ganga Travels.\n\nI can answer all your questions about Char Dham Yatra, packages, prices, trek details, and bookings.\n\nWhat would you like to know?`,
        time: now(),
        id: Date.now(),
      };
      setTimeout(() => setMsgs([greeting]), 300);
    }
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [open, started]);

  /* Auto-scroll to latest message */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  const addMsg = (role, text, typing = false) => {
    const msg = { role, text, typing, time: now(), id: Date.now() + Math.random() };
    setMsgs(prev => [...prev, msg]);
    return msg.id;
  };

  const replaceMsg = (id, text) => {
    setMsgs(prev => prev.map(m =>
      m.id === id ? { ...m, text, typing: false } : m
    ));
  };

  const sendMessage = useCallback(async (text) => {
    const q = text.trim();
    if (!q || loading) return;

    setInput('');
    addMsg('user', q);
    setLoading(true);

    // 1. Check custom Q&A first (instant, no API call)
    const customAns = findCustomAnswer(q);
    if (customAns) {
      const id = addMsg('bot', '', true); // typing indicator
      setTimeout(() => {
        replaceMsg(id, customAns);
        setLoading(false);
      }, 600);
      return;
    }

    // 2. Fall back to Claude AI
    const typingId = addMsg('bot', '', true);
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 300,
          system: AI_SYSTEM_PROMPT,
          messages: [
            // Include last few messages as context
            ...msgs.slice(-6).filter(m => !m.typing).map(m => ({
              role: m.role === 'bot' ? 'assistant' : 'user',
              content: m.text,
            })),
            { role: 'user', content: q },
          ],
        }),
      });
      const data = await response.json();
      const answer = data.content?.[0]?.text || 'I\'m sorry, I couldn\'t process that. Please WhatsApp us at ' + SITE.phone;
      replaceMsg(typingId, answer);
    } catch {
      replaceMsg(typingId, `Sorry, I had a hiccup! Please WhatsApp us directly at ${SITE.phone} — our team replies within 2 hours. 🙏`);
    } finally {
      setLoading(false);
    }
  }, [loading, msgs]);

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity:.4; }
          30% { transform: translateY(-5px); opacity:1; }
        }
        @keyframes chatSlideUp {
          from { opacity:0; transform:translateY(16px) scale(.97); }
          to   { opacity:1; transform:translateY(0)    scale(1); }
        }
        @keyframes badgePop {
          from { transform:scale(0); }
          to   { transform:scale(1); }
        }
        @keyframes botPulse {
          0%,100% { box-shadow:0 4px 18px rgba(15,43,91,0.35), 0 0 0 0 rgba(15,43,91,0.35); }
          50%     { box-shadow:0 4px 18px rgba(15,43,91,0.35), 0 0 0 12px rgba(15,43,91,0); }
        }
      `}}/>

      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        style={{
          position: 'fixed',
          bottom: 96, right: 24,
          zIndex: 998,
          width: 54, height: 54,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--navy) 0%, #1a3e75 100%)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 18px rgba(15,43,91,0.35)',
          animation: open ? 'none' : 'botPulse 3s ease-in-out infinite',
          transition: 'transform .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? (
          <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <path d="M4 4l12 12M16 4L4 16"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        {/* Unread badge */}
        {!open && unread > 0 && (
          <span style={{
            position: 'absolute', top: -3, right: -3,
            background: 'var(--gold)', color: '#fff',
            width: 18, height: 18, borderRadius: '50%',
            fontSize: 10, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid #fff',
            animation: 'badgePop .3s var(--t-out)',
          }}>{unread}</span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="chat-window" style={{
          position: 'fixed',
          bottom: 162, right: 24,
          zIndex: 997,
          width: 'min(380px, calc(100vw - 32px))',
          height: 'min(560px, calc(100vh - 180px))',
          background: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 64px rgba(15,43,91,0.22), 0 4px 16px rgba(15,43,91,0.1)',
          animation: 'chatSlideUp .3s var(--t-out)',
          border: '1px solid var(--border)',
        }}>

          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--navy) 0%, #1a3e75 100%)',
            padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, var(--gold), #f5a623)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, boxShadow: '0 3px 10px rgba(232,146,10,0.4)',
            }}>{BOT_AVATAR}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>{BOT_NAME}</div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, marginTop: 2, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, background: '#4ade80', borderRadius: '50%', flexShrink: 0 }}/>
                Online · {BOT_TAGLINE}
              </div>
            </div>
            {/* WhatsApp shortcut */}
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
              title="Chat on WhatsApp"
              style={{
                width: 34, height: 34, borderRadius: '50%',
                background: '#25D366',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(37,211,102,0.4)',
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.85L0 24l6.335-1.503A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.68-.49-5.23-1.35l-.374-.213-3.884.921.977-3.775-.233-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
          </div>

          {/* Messages area */}
          <div style={{
            flex: 1, overflowY: 'auto', overflowX: 'hidden',
            padding: '14px 12px',
            background: 'var(--bg)',
            scrollbarWidth: 'thin',
          }}>
            {msgs.map(msg => <Bubble key={msg.id} msg={msg}/>)}

            {/* Quick questions — shown when there's only the greeting */}
            {msgs.length === 1 && (
              <div style={{ marginTop: 8 }}>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 8, textAlign: 'center' }}>
                  Tap a question to get started ↓
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center' }}>
                  {QUICK_QUESTIONS.map(q => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      style={{
                        padding: '6px 13px', fontSize: 12, fontWeight: 500,
                        background: '#fff', color: 'var(--navy)',
                        border: '1.5px solid var(--border)',
                        borderRadius: 100, cursor: 'pointer',
                        fontFamily: 'var(--font)',
                        transition: 'all .15s',
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--navy)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--navy)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={endRef}/>
          </div>

          {/* Input bar */}
          <div style={{
            padding: '10px 12px',
            background: '#fff',
            borderTop: '1px solid var(--border)',
            display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0,
          }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your question..."
              disabled={loading}
              style={{
                flex: 1, minWidth: 0,
                padding: '9px 13px',
                border: '1.5px solid var(--border)',
                borderRadius: 100,
                fontSize: 13, fontFamily: 'var(--font)',
                background: 'var(--bg)', color: 'var(--text)',
                outline: 'none',
                transition: 'border-color .15s',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--navy)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              aria-label="Send"
              style={{
                width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                background: loading || !input.trim() ? 'var(--bg)' : 'var(--navy)',
                border: 'none', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all .15s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke={loading || !input.trim() ? 'var(--text-muted)' : '#fff'}
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2L2 7l5 1m7-6l-5 7-1-5m6-2L7 8"/>
              </svg>
            </button>
          </div>

          {/* Powered by note */}
          <div style={{
            padding: '5px', textAlign: 'center',
            fontSize: 10, color: 'var(--text-muted)',
            background: '#fff', borderTop: '1px solid var(--border)',
            flexShrink: 0,
          }}>
            Powered by AI · For bookings use the WhatsApp button above
          </div>
        </div>
      )}
    </>
  );
}
