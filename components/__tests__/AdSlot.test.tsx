import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { AdSlot } from "@/components/AdSlot";

describe("AdSlot", () => {
  it("renders an adsbygoogle ins element", () => {
    const { container } = render(<AdSlot />);
    const ins = container.querySelector("ins.adsbygoogle");
    expect(ins).toBeInTheDocument();
  });
});
