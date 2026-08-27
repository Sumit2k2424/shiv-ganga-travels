# Featured — journalist source requests

**Prospect:** `featured-journalist-queries`  ·  **Wants:** quote  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/about
**Packet written:** 2026-08-27

## Why this one

Replaces the HARO workflow, which shut down at the end of 2024. Journalists post questions, experts answer, published answers carry a byline and a link. Travel and small-business queries come up regularly and a sixteen-year Himalayan operator is a genuinely qualified source.

## Before you touch it

> Only answer where the founder is actually the expert. Answering off-topic queries for the link is how a source gets dropped, and the answers are published under a real name.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: Platform live Aug 2026. Free vs paid tier NOT verified.

## Steps

1. `npm run links:audit -- featured.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://featured.com/experts and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-08-27'` on `featured-journalist-queries` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
