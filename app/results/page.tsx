"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { questions } from "@/data/questions";
import { ScoreDisplay } from "@/components/ScoreDisplay";
import { AdSlot } from "@/components/AdSlot";
import { calculateScore, getCategoryBreakdown } from "@/lib/scoring";
import Link from "next/link";

function ResultsContent() {
  const searchParams = useSearchParams();
  const [selections, setSelections] = useState<Record<number, number>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const raw = searchParams.get("selections");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Record<number, number>;
        setSelections(parsed);
      } catch {
        setSelections({});
      }
    }
  }, [searchParams]);

  if (!mounted) {
    return (
      <div className="py-12 text-center text-[var(--color-muted)]">
        Loading results…
      </div>
    );
  }

  const score = calculateScore(selections);
  const breakdown = getCategoryBreakdown(selections);

  return (
    <div className="space-y-8">
      <ScoreDisplay score={score} />

      <AdSlot />

      <section className="rounded-2xl bg-[var(--color-card)] p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Category Breakdown</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {Object.entries(breakdown).map(([category, stats]) => (
            <div
              key={category}
              className="rounded-xl bg-[var(--color-background)] p-4 text-center"
            >
              <div className="text-sm capitalize text-[var(--color-muted)]">
                {category.replace("-", " ")}
              </div>
              <div className="text-2xl font-bold">
                {stats.correct}/{stats.total}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Answer Explanations</h2>
        {questions.map((question, idx) => {
          const selected = selections[question.id];
          const isCorrect = selected === question.correctAnswerIndex;
          return (
            <div
              key={question.id}
              className="rounded-xl bg-[var(--color-card)] p-5 shadow-sm"
            >
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="font-medium">
                  {idx + 1}. {question.text}
                </h3>
                <span
                  className={`shrink-0 rounded-full px-2 py-1 text-xs font-semibold ${
                    isCorrect
                      ? "bg-green-100 text-[var(--color-success)]"
                      : "bg-red-100 text-[var(--color-error)]"
                  }`}
                >
                  {isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>
              <p className="mb-2 text-sm text-[var(--color-muted)]">
                Your answer: {" "}
                {selected !== undefined
                  ? question.options[selected]
                  : "No answer"}
              </p>
              <p className="mb-2 text-sm">
                Correct answer: {" "}
                <strong>{question.options[question.correctAnswerIndex]}</strong>
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                {question.explanation}
              </p>
            </div>
          );
        })}
      </section>

      <div className="text-center">
        <Link
          href="/"
          className="inline-block rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-primary-foreground)] transition hover:bg-blue-700"
        >
          Take Test Again
        </Link>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-[var(--color-muted)]">
          Loading results…
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
