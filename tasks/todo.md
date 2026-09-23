# Tasks: myIQ

- [x] Task: Initialize Next.js project with TypeScript, Tailwind, and GitHub Pages static export config
  - Acceptance: `npm run dev` starts the dev server; `npm run build` produces a static export in `dist/` or `out/`.
  - Verify: Run `npm run build` and check that static files are generated.
  - Files: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/layout.tsx`, `app/globals.css`

- [x] Task: Define Question type and create 30-question dataset
  - Acceptance: A typed `questions.ts` file exists with 30 questions (10 logic, 10 pattern, 10 verbal/spatial), each with text, options, correct index, category, and explanation.
  - Verify: Import questions in a temporary page and render count; run a validation script.
  - Files: `data/questions.ts`, `lib/types.ts`

- [x] Task: Implement scoring, localStorage persistence, and timer utilities
  - Acceptance: Functions exist to calculate a score from selections, save/load in-progress test state, and run an enforced countdown.
  - Verify: Unit tests pass for scoring, storage, and timer helpers.
  - Files: `lib/scoring.ts`, `lib/storage.ts`, `lib/timer.ts`, `lib/__tests__/*.test.ts`

- [x] Task: Build QuestionCard, ProgressBar, Timer, ScoreDisplay, and AdSlot components
  - Acceptance: All components render correctly in isolation and handle their props.
  - Verify: Component tests pass with React Testing Library.
  - Files: `components/QuestionCard.tsx`, `components/ProgressBar.tsx`, `components/Timer.tsx`, `components/ScoreDisplay.tsx`, `components/AdSlot.tsx`, `components/__tests__/*.test.tsx`

- [x] Task: Build landing page
  - Acceptance: Landing page explains the test, shows "Start Test" button, and is SEO-friendly.
  - Verify: Manual check + Lighthouse SEO score ≥ 90.
  - Files: `app/page.tsx`

- [x] Task: Build test page with enforced timer and navigation
  - Acceptance: User can answer 30 questions, see progress, see timer, and submit (or auto-submit on timeout). State persists across reloads.
  - Verify: E2E test covers start → answer all → submit.
  - Files: `app/test/page.tsx`

- [x] Task: Build results page with score and answer explanations
  - Acceptance: Results show total score, per-question correctness, and explanations. No signup or payment required.
  - Verify: E2E test covers results display; unit tests cover score formatting.
  - Files: `app/results/page.tsx`

- [x] Task: Add Google AdSense and analytics integration
  - Acceptance: Ad script loads in layout; ad slots render on landing, test, and results pages without blocking content. Analytics script is present.
  - Verify: Build succeeds; no console errors from ad/analytics code; Lighthouse performance remains acceptable.
  - Files: `components/AdSlot.tsx`, `app/layout.tsx`

- [x] Task: Add Vitest unit and component tests
  - Acceptance: `npm test` runs and passes with ≥ 70% coverage for `lib/` and `components/`.
  - Verify: Run `npm test -- --coverage`.
  - Files: `vitest.config.ts`, test files under `lib/__tests__/` and `components/__tests__/`

- [x] Task: Add Playwright E2E test for full test flow
  - Acceptance: One E2E test completes the full journey from landing to results.
  - Verify: Run `npx playwright test`.
  - Files: `playwright.config.ts`, `e2e/full-flow.spec.ts`

- [x] Task: Configure GitHub Pages deployment and verify production build
  - Acceptance: `npm run deploy` pushes the static build to GitHub Pages; site loads and routes work.
  - Verify: Deploy and manually test the live URL.
  - Files: `next.config.ts`, `package.json` scripts, `.github/workflows/deploy.yml` (optional)
