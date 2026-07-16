# Lead Tracking — one-time setup (≈2 minutes)

Every WhatsApp click, Call click, Enquire click, popup form and hero search
across the whole site now logs a row: **Date · Time · Type · Page · Package ·
Number · Name · Details** — all times in IST. The rows go to a Google Sheet
you own. Open it anytime, or **File → Download → Microsoft Excel (.xlsx)**.

## Steps

1. Go to **sheets.google.com** → create a blank sheet, name it
   `SGT Leads`.
2. In the sheet: **Extensions → Apps Script**. Delete the sample code and
   paste everything from **`lead-sheet-webhook.gs`** (in this repo root).
   Save (Ctrl+S).
3. Click **Deploy → New deployment → ⚙ → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, authorise with your Google account, and **copy the
     Web app URL** (ends in `/exec`).
4. In **Vercel → Project → Settings → Environment Variables**, add:
   - Name: `LEAD_SHEET_WEBHOOK`
   - Value: *(the URL you copied)*
   - Environment: Production
5. **Redeploy** the site once.

Done. Tap any WhatsApp/Call button on the live site — a row appears in the
sheet within a second or two.

## What each column means

| Column  | Meaning |
|---------|---------|
| Type    | WhatsApp / Call / Enquire / Popup Form / Hero Search |
| Page    | The page the visitor was on (e.g. `/kedarnath-tour-package`) |
| Package | Detected from the button, the WhatsApp message, or the page |
| Number  | Which of your numbers was tapped — **or the visitor's own number** for Popup Form leads |
| Name    | Visitor's name (Popup Form only) |
| Details | Prefilled WhatsApp message / month / pilgrim count |

## Notes

- If the env var is missing, the site works exactly as before — tracking
  simply stays off. It can never slow down or break a page.
- Nothing personal is collected beyond what the visitor typed into the
  popup form themselves.
- To plan leads: sort/filter the sheet by Package or Date, or download as
  Excel and pivot.
