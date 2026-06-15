import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("Should render my Heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test("Should render all headings", () => {
    render(<Contact />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(2);
    expect(headings[0]).toHaveTextContent("Contact Us");
    expect(headings[1]).toHaveTextContent("This is the React Learning Phase");
  });

  it("Should load button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
