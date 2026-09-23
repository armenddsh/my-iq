import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QuestionCard } from "@/components/QuestionCard";

const question = {
  id: 1,
  text: "What is 2 + 2?",
  options: ["3", "4", "5", "6"],
  correctAnswerIndex: 1,
  category: "logic" as const,
  explanation: "Two plus two equals four.",
};

describe("QuestionCard", () => {
  it("renders the question text and options", () => {
    render(
      <QuestionCard question={question} selectedAnswer={null} onSelect={vi.fn()} />,
    );
    expect(screen.getByText(question.text)).toBeInTheDocument();
    question.options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("calls onSelect with the selected index", () => {
    const onSelect = vi.fn();
    render(
      <QuestionCard question={question} selectedAnswer={null} onSelect={onSelect} />,
    );
    fireEvent.click(screen.getByText("4"));
    expect(onSelect).toHaveBeenCalledWith(1);
  });

  it("highlights the selected answer", () => {
    render(
      <QuestionCard question={question} selectedAnswer={1} onSelect={vi.fn()} />,
    );
    const selectedButton = screen.getByText("4");
    expect(selectedButton.className).toContain("border-[var(--color-primary)]");
  });
});
