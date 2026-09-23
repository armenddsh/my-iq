import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProgressBar } from "@/components/ProgressBar";

describe("ProgressBar", () => {
  it("displays current and total question numbers", () => {
    render(<ProgressBar current={5} total={20} />);
    expect(screen.getByText("Question 5 of 20")).toBeInTheDocument();
    expect(screen.getByText("25%")).toBeInTheDocument();
  });

  it("renders a progressbar with correct aria values", () => {
    render(<ProgressBar current={10} total={30} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "10");
    expect(bar).toHaveAttribute("aria-valuemax", "30");
  });
});
