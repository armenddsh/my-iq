export const TEST_DURATION_SECONDS = 20 * 60; // 20 minutes

export function formatTime(totalSeconds: number): string {
  const clamped = Math.max(0, Math.ceil(totalSeconds));
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function calculateRemainingSeconds(
  startedAt: number,
  totalDurationSeconds: number,
): number {
  const elapsed = (Date.now() - startedAt) / 1000;
  return Math.max(0, totalDurationSeconds - elapsed);
}
