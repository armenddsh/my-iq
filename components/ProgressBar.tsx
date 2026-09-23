interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-sm text-[var(--color-muted)]">
        <span>
          Question {current} of {total}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}
