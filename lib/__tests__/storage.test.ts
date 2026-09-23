import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { loadTestState, saveTestState, clearTestState } from "@/lib/storage";

describe("storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it("returns null when no state is saved", () => {
    expect(loadTestState()).toBeNull();
  });

  it("saves and loads valid state", () => {
    const state = {
      selections: { 1: 2 },
      currentQuestionIndex: 5,
      remainingSeconds: 600,
      startedAt: Date.now(),
    };
    saveTestState(state);
    expect(loadTestState()).toEqual(state);
  });

  it("returns null for corrupted state", () => {
    window.localStorage.setItem("myiq-test-state", "not json");
    expect(loadTestState()).toBeNull();
  });

  it("returns null for malformed object", () => {
    window.localStorage.setItem(
      "myiq-test-state",
      JSON.stringify({ currentQuestionIndex: "five" }),
    );
    expect(loadTestState()).toBeNull();
  });

  it("clears saved state", () => {
    saveTestState({
      selections: {},
      currentQuestionIndex: 0,
      remainingSeconds: 1200,
      startedAt: Date.now(),
    });
    clearTestState();
    expect(loadTestState()).toBeNull();
  });
});
