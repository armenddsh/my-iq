# Plan: myIQ

## Components

1. **Project shell** — Next.js 15 + TypeScript + Tailwind CSS configured for static export to GitHub Pages.
2. **Question data** — Typed dataset of 30 IQ questions (10 logic, 10 pattern, 10 verbal/spatial).
3. **Core logic** — Scoring, `localStorage` persistence, enforced countdown timer.
4. **UI components** — QuestionCard, ProgressBar, Timer, ScoreDisplay, AdSlot.
5. **Pages** — Landing, test, results.
6. **Monetization/tracking** — Google AdSense slots + GA4/Plausible.
7. **Tests** — Vitest unit/component tests + Playwright E2E.
8. **Deploy** — GitHub Pages build + deploy config.

## Implementation Order

1. Project shell
2. Data + types
3. Core logic
4. UI components
5. Pages
6. Ads + analytics
7. Tests
8. Build/deploy verification

## Risks & Mitigations

- **Risk:** GitHub Pages base path handling breaks client-side navigation.
  - *Mitigation:* Set `basePath` and `assetPrefix` in `next.config.js`; use relative links where possible.
- **Risk:** Question quality is uneven or answers are ambiguous.
  - *Mitigation:* Review each question for a single unambiguous correct answer; add explanations.
- **Risk:** Timer + `localStorage` state gets out of sync on refresh.
  - *Mitigation:* Save question index, selections, and remaining time together; validate on load.
- **Risk:** Ads slow down the site or hurt Core Web Vitals.
  - *Mitigation:* Defer ad script loading; limit ad slots; test Lighthouse scores.
