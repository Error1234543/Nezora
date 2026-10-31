# SONIC Universe

A mobile-first digital playground: play mini games, use everyday tools, take quizzes and create ideas.

## Structure

- `index.html` — main dashboard
- `assets/css/style.css` — shared Aura-inspired dark/cyan theme
- `assets/js/app.js` — shared browser helpers
- `arcade/` — game directory
  - `games/tictactoe/`
  - `games/memory/`
  - `games/number-guess/`
- `tools/` — utilities
  - `calculator/`
  - `text-tools/`
  - `password/`
  - `qr/`
  - `timer/`
- `quiz/` — general knowledge quiz
- `create/` — prompt and idea templates
- `community/` — local-only poll and suggestion demo
- `about/` — project vision and roadmap

## Deploy

Deploy the repository root as a static site on Netlify, Vercel, or GitHub Pages. No build command is required.

## Important implementation notes

- Games and tools run in the visitor's browser.
- Community votes and suggestions are stored in localStorage on that device only; they are not shared.
- The QR generator uses a third-party QR image endpoint. Do not encode private information.
- The calculator accepts only arithmetic characters, but avoid entering untrusted expressions.
- No real authentication, cloud database, public chat, multiplayer or synced leaderboard is configured yet. Those require a secure backend and server-side validation. Never put private API keys in frontend files.

## Next backend phase

Add managed authentication, database tables for profiles/scores/ideas, server-side validation, moderation and rate limits. Keep service-role secrets server-side only.
