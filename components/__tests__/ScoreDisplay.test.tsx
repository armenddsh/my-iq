import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScoreDisplay } from "@/components/ScoreDisplay";

const score = {
  correctCount: 25,
  totalQuestions: 30,
  percentage: 83,
  estimatedIQ: 120,
};

describe("ScoreDisplay", () => {
  it("renders score and estimated IQ", () => {
    render(<ScoreDisplay score={score} />);
    expect(screen.getByText("83%")).toBeInTheDocument();
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(
      screen.getByText("You answered 25 out of 30 correctly"),
    ).toBeInTheDocument();
  });
});
