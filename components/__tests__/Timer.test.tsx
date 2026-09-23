import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Timer } from "@/components/Timer";

describe("Timer", () => {
  it("formats remaining time", () => {
    render(<Timer remainingSeconds={125} />);
    expect(screen.getByText("02:05")).toBeInTheDocument();
  });

  it("shows warning styling when time is low", () => {
    render(<Timer remainingSeconds={45} />);
    const timer = screen.getByLabelText(/Time remaining/);
    expect(timer.className).toContain("bg-red-100");
  });
});
