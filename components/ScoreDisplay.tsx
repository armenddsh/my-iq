import { ScoreResult } from "@/lib/scoring";

interface ScoreDisplayProps {
  score: ScoreResult;
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <div className="rounded-2xl bg-[var(--color-card)] p-8 shadow-sm text-center">
      <h2 className="mb-2 text-2xl font-semibold">Your Results</h2>
      <p className="mb-6 text-[var(--color-muted)]">
        You answered {score.correctCount} out of {score.totalQuestions} correctly
      </p>

      <div className="mb-6 flex justify-center gap-4">
        <div className="rounded-xl bg-blue-50 p-4">
          <div className="text-sm text-[var(--color-muted)]">Score</div>
          <div className="text-3xl font-bold text-[var(--color-primary)]">
            {score.percentage}%
          </div>
        </div>
        <div className="rounded-xl bg-green-50 p-4">
          <div className="text-sm text-[var(--color-muted)]">Estimated IQ</div>
          <div className="text-3xl font-bold text-[var(--color-success)]">
            {score.estimatedIQ}
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--color-muted)]">
        This is an informal estimate for entertainment purposes. A formal IQ
        test requires professional administration and normed scoring.
      </p>
    </div>
  );
}
