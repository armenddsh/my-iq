# Spec: myIQ

## Objective

Build a free, no-signup, static IQ test website called **myIQ** that lets anyone take a full IQ test and see their score + correct answers immediately, without paywalls or account creation.

**User story:** As someone searching for a free IQ test, I want a fast, honest test that doesn't waste my time or hide my results behind a payment wall.

**Success criteria:**
- [ ] A visitor can complete a full IQ test in 15–25 minutes.
- [ ] Test has an enforced countdown timer that auto-submits when time expires.
- [ ] Results (score, correct answers, explanations) are shown immediately after submission.
- [ ] No signup, no login, no forced payment, no backend server.
- [ ] Site is deployable as static files to GitHub Pages and scores well on mobile performance and SEO.
- [ ] Ad placements are non-intrusive and support Google AdSense integration.

## Tech Stack

- **Framework:** Next.js 15 (App Router) with static export (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **State:** React hooks + `localStorage` for in-progress test persistence; enforced countdown timer
- **Ads:** Google AdSense (ad slots via manual script injection; no ad manager backend)
- **Deployment:** GitHub Pages
- **Analytics:** Google Analytics 4 or Plausible (no backend)

## Commands

```bash
# Development
npm run dev

# Production build (static export for GitHub Pages)
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
my-iq/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Landing page
│   ├── test/               # Test pages
│   │   └── page.tsx
│   ├── results/            # Results page
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout (metadata, ads script, analytics)
│   └── globals.css
├── components/             # Reusable React components
│   ├── QuestionCard.tsx
│   ├── AnswerOption.tsx
│   ├── ProgressBar.tsx
│   ├── Timer.tsx
│   ├── ScoreDisplay.tsx
│   └── AdSlot.tsx
├── data/                   # Static question data
│   └── questions.ts
├── lib/                    # Utilities and scoring logic
│   ├── scoring.ts
│   └── storage.ts
├── public/                 # Static assets
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Code Style

- Components are named exports in PascalCase.
- Utility files use camelCase.
- Data arrays are immutable; questions are read-only objects.
- No `any` in TypeScript without an explicit comment.
- Tailwind classes over custom CSS when possible.

Example component:

```tsx
// components/QuestionCard.tsx
"use client";

import { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-semibold">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full rounded-lg border p-3 text-left transition ${
              selectedAnswer === idx
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## Testing Strategy

- **Framework:** Vitest + React Testing Library
- **Unit tests:** Scoring logic, question data validation, storage helpers.
- **Component tests:** QuestionCard, ProgressBar, ScoreDisplay.
- **E2E:** Playwright for the full test flow (start → answer → submit → see results).
- **Coverage target:** 70% for `lib/` and `components/`.

## Boundaries

- **Always:**
  - Keep the site fully static (no API routes, no server runtime).
  - Show results without requiring any user information.
  - Optimize for mobile performance and Core Web Vitals.
  - Persist only the in-progress test state in `localStorage` (no PII).

- **Ask first:**
  - Adding any backend or serverless function.
  - Adding user accounts or persistent result storage.
  - Adding paid features, premium tiers, or paywalls of any kind.
  - Changing the ad provider or adding tracking beyond GA4/Plausible.
  - Expanding beyond one main IQ test.

- **Never:**
  - Hide results behind a signup or payment.
  - Store personal data.
  - Use a real backend database.

## Decisions Made

1. **Question count and categories:** 30 questions total — 10 logic, 10 pattern recognition, 10 verbal/spatial. Questions will be created as part of the build.
2. **Timer:** Enforced countdown timer that auto-submits the test when time expires.
3. **Deployment:** GitHub Pages via static export.

## Open Questions

1. **Ads:** Are you okay with Google AdSense, or do you have another ad network in mind?
2. **GitHub repo:** Should this directory be initialized as a Git repo and configured for GitHub Pages now, or later?
