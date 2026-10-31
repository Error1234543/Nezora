# SONIC Universe

A mobile-first, Aura-inspired digital playground to play, learn, create and use everyday browser utilities.

## Main sections

- `index.html` — main dashboard with custom SVG icons and 3D folder-style cards
- `assets/css/style.css` — shared dark/cyan 3D Aura theme
- `assets/js/app.js` — shared browser helpers
- `arcade/` — Tic-Tac-Toe, Memory Match and Number Guess
- `tools/` — 17 standalone utilities plus `pro-studio/` with 10 advanced utilities (JSON workbench, regex tester, text diff, UUID, SHA-256, JWT inspector, timestamp converter, CSS gradient studio, contrast checker and CSV/JSON converter):
  - Calculator
  - Text Toolkit
  - Password Generator
  - QR Code Generator
  - Focus Timer
  - Percentage Calculator
  - Unit Converter
  - Date & Age Calculator
  - Date Difference
  - Stopwatch
  - Random Picker
  - JSON Formatter
  - URL Encoder / Decoder
  - Base64 Encoder / Decoder
  - Color Picker
  - Markdown Preview
  - Word Counter
- `quiz/` — 10-question general knowledge quiz
- `create/` — prompt, caption, website and video idea templates
- `community/` — local-only poll and suggestion demo
- `about/` — project vision and roadmap
- `sonic/` — earlier standalone SONIC demo (preserved)

## Deploy

Deploy the repository root as a static site on Netlify, Vercel or GitHub Pages. No build command is required.

## Important notes

- Games and tools run in the visitor's browser.
- Community votes and suggestions are saved only in that visitor's browser; they are not shared publicly.
- QR generation uses a third-party QR image service. Do not encode private information.
- No real authentication, cloud database, public chat, multiplayer or synced leaderboard is configured yet.
- Keep private API keys on a server, never in frontend files.

## Next backend phase

Add secure authentication, database-backed profiles and scores, server-side validation, moderation and rate limits.
