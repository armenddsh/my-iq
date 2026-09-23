import { questions } from "@/data/questions";

export interface ScoreResult {
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  estimatedIQ: number;
}

export function calculateScore(
  selections: Readonly<Record<number, number>>,
): ScoreResult {
  const totalQuestions = questions.length;
  let correctCount = 0;

  for (const question of questions) {
    const selected = selections[question.id];
    if (selected === question.correctAnswerIndex) {
      correctCount += 1;
    }
  }

  const percentage =
    totalQuestions === 0 ? 0 : Math.round((correctCount / totalQuestions) * 100);

  const estimatedIQ = estimateIQ(percentage);

  return {
    correctCount,
    totalQuestions,
    percentage,
    estimatedIQ,
  };
}

/**
 * Map a raw percentage correct to a rough IQ estimate.
 * This is a heuristic for entertainment purposes; a real IQ test
 * requires normed population data.
 */
export function estimateIQ(percentage: number): number {
  const clamped = Math.max(0, Math.min(100, percentage));
  // Linear map: 0% -> 70, 50% -> 100, 100% -> 130
  return Math.round(70 + (clamped / 100) * 60);
}

export function getCategoryBreakdown(
  selections: Readonly<Record<number, number>>,
) {
  const breakdown: Record<
    string,
    { total: number; correct: number }
  > = {};

  for (const question of questions) {
    const entry = (breakdown[question.category] ??= {
      total: 0,
      correct: 0,
    });
    entry.total += 1;
    if (selections[question.id] === question.correctAnswerIndex) {
      entry.correct += 1;
    }
  }

  return breakdown;
}
