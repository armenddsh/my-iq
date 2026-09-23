const STORAGE_KEY = "myiq-test-state";

export interface TestState {
  selections: Record<number, number>;
  currentQuestionIndex: number;
  remainingSeconds: number;
  startedAt: number;
}

export function saveTestState(state: TestState): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors (e.g. private mode, quota exceeded).
  }
}

export function loadTestState(): TestState | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as Partial<TestState>;

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof parsed.currentQuestionIndex !== "number" ||
      typeof parsed.remainingSeconds !== "number" ||
      typeof parsed.startedAt !== "number" ||
      typeof parsed.selections !== "object" ||
      parsed.selections === null
    ) {
      return null;
    }

    return {
      selections: parsed.selections,
      currentQuestionIndex: parsed.currentQuestionIndex,
      remainingSeconds: parsed.remainingSeconds,
      startedAt: parsed.startedAt,
    };
  } catch {
    return null;
  }
}

export function clearTestState(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors.
  }
}
