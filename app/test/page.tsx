"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { Timer } from "@/components/Timer";
import { AdSlot } from "@/components/AdSlot";
import {
  loadTestState,
  saveTestState,
  clearTestState,
} from "@/lib/storage";
import {
  calculateRemainingSeconds,
  TEST_DURATION_SECONDS,
} from "@/lib/timer";

export default function TestPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState<Record<number, number>>({});
  const [remainingSeconds, setRemainingSeconds] = useState(
    TEST_DURATION_SECONDS,
  );

  const finishTest = useCallback(
    (finalSelections: Record<number, number>) => {
      clearTestState();
      const params = new URLSearchParams();
      params.set("selections", JSON.stringify(finalSelections));
      router.push(`/results?${params.toString()}`);
    },
    [router],
  );

  useEffect(() => {
    setMounted(true);
    const saved = loadTestState();
    if (saved) {
      const remaining = calculateRemainingSeconds(
        saved.startedAt,
        TEST_DURATION_SECONDS,
      );
      if (remaining <= 0) {
        finishTest(saved.selections);
        return;
      }
      setCurrentIndex(saved.currentQuestionIndex);
      setSelections(saved.selections);
      setRemainingSeconds(remaining);
    }
  }, [finishTest]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        const next = Math.max(0, prev - 1);
        saveTestState({
          selections,
          currentQuestionIndex: currentIndex,
          remainingSeconds: next,
          startedAt: Date.now() - (TEST_DURATION_SECONDS - next) * 1000,
        });
        if (next <= 0) {
          clearInterval(interval);
          finishTest(selections);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, selections, currentIndex, finishTest]);

  const handleSelect = (index: number) => {
    setSelections((prev) => {
      const next = { ...prev, [questions[currentIndex].id]: index };
      saveTestState({
        selections: next,
        currentQuestionIndex: currentIndex,
        remainingSeconds,
        startedAt: Date.now() - (TEST_DURATION_SECONDS - remainingSeconds) * 1000,
      });
      return next;
    });
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    finishTest(selections);
  };

  if (!mounted) {
    return (
      <div className="py-12 text-center text-[var(--color-muted)]">
        Loading test…
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const hasAnswered = selections[currentQuestion.id] !== undefined;

  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-10 -mx-4 bg-[var(--color-background)] px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <ProgressBar current={currentIndex + 1} total={questions.length} />
          <Timer remainingSeconds={remainingSeconds} />
        </div>
      </div>

      <AdSlot />

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selections[currentQuestion.id] ?? null}
        onSelect={handleSelect}
      />

      <div className="flex items-center justify-between gap-4">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 font-medium disabled:opacity-50"
        >
          Previous
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            onClick={goToNext}
            className="rounded-lg bg-[var(--color-primary)] px-4 py-2 font-medium text-[var(--color-primary-foreground)]"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-[var(--color-success)] px-4 py-2 font-medium text-white"
          >
            Submit
          </button>
        )}
      </div>

      {!hasAnswered && (
        <p className="text-center text-sm text-[var(--color-muted)]">
          Select an answer to continue.
        </p>
      )}
    </div>
  );
}
