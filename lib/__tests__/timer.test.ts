import { describe, expect, it } from "vitest";
import {
  formatTime,
  calculateRemainingSeconds,
  TEST_DURATION_SECONDS,
} from "@/lib/timer";

describe("formatTime", () => {
  it("formats minutes and seconds with leading zeros", () => {
    expect(formatTime(65)).toBe("01:05");
    expect(formatTime(600)).toBe("10:00");
    expect(formatTime(59)).toBe("00:59");
  });

  it("returns 00:00 for zero or negative input", () => {
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(-10)).toBe("00:00");
  });
});

describe("calculateRemainingSeconds", () => {
  it("returns full duration when just started", () => {
    const now = Date.now();
    const remaining = calculateRemainingSeconds(now, TEST_DURATION_SECONDS);
    expect(remaining).toBeCloseTo(TEST_DURATION_SECONDS, 0);
  });

  it("returns zero when time has expired", () => {
    const past = Date.now() - TEST_DURATION_SECONDS * 1000 - 1000;
    expect(calculateRemainingSeconds(past, TEST_DURATION_SECONDS)).toBe(0);
  });
});

describe("TEST_DURATION_SECONDS", () => {
  it("is 20 minutes", () => {
    expect(TEST_DURATION_SECONDS).toBe(1200);
  });
});
