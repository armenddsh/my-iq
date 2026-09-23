"use client";

import { Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-xl bg-[var(--color-card)] p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full rounded-lg border p-3 text-left transition ${
              selectedAnswer === idx
                ? "border-[var(--color-primary)] bg-blue-50"
                : "border-[var(--color-border)] hover:border-[var(--color-primary)]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
