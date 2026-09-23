"use client";

import { formatTime } from "@/lib/timer";

interface TimerProps {
  remainingSeconds: number;
}

export function Timer({ remainingSeconds }: TimerProps) {
  const formatted = formatTime(remainingSeconds);
  const isLow = remainingSeconds < 60;

  return (
    <div
      className={`rounded-lg px-4 py-2 font-mono text-lg font-semibold ${
        isLow
          ? "bg-red-100 text-[var(--color-error)]"
          : "bg-[var(--color-border)] text-[var(--color-foreground)]"
      }`}
      aria-live="polite"
      aria-label={`Time remaining: ${formatted}`}
    >
      {formatted}
    </div>
  );
}
