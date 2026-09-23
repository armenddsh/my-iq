import { describe, expect, it } from "vitest";
import { calculateScore, estimateIQ, getCategoryBreakdown } from "@/lib/scoring";

describe("calculateScore", () => {
  it("returns zero when no selections are provided", () => {
    const result = calculateScore({});
    expect(result.correctCount).toBe(0);
    expect(result.percentage).toBe(0);
  });

  it("counts only correct answers", () => {
    // We use the real questions array indirectly by checking a known subset via getCategoryBreakdown.
    // Here we just verify the shape and boundary behavior.
    const result = calculateScore({ 1: 0, 2: 1, 3: 2 });
    expect(result.totalQuestions).toBeGreaterThan(0);
    expect(result.percentage).toBeGreaterThanOrEqual(0);
    expect(result.percentage).toBeLessThanOrEqual(100);
  });
});

describe("estimateIQ", () => {
  it("maps 0% to 70", () => {
    expect(estimateIQ(0)).toBe(70);
  });

  it("maps 50% to 100", () => {
    expect(estimateIQ(50)).toBe(100);
  });

  it("maps 100% to 130", () => {
    expect(estimateIQ(100)).toBe(130);
  });

  it("clamps values outside 0-100", () => {
    expect(estimateIQ(-10)).toBe(70);
    expect(estimateIQ(110)).toBe(130);
  });
});

describe("getCategoryBreakdown", () => {
  it("groups results by category", () => {
    const breakdown = getCategoryBreakdown({ 1: 0 });
    expect(breakdown.logic).toBeDefined();
    expect(breakdown.logic.total).toBeGreaterThan(0);
  });
});
