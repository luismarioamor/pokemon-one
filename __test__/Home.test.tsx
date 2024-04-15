import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("has a main element with a specific inline style", () => {
    render(<Home />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveStyle("height: 100vh");
  });
});
