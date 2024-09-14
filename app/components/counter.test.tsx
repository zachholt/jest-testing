/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

describe('Add Counter', () => {
  it("increase counter by 1", () => {
    render(<Counter />);
    expect(screen.getByRole("heading")).toHaveTextContent("0");
    fireEvent.click(screen.getByText("Increase"));
    expect(screen.getByRole("heading")).toHaveTextContent("1");
  });
});

describe('Subtract Counter', () => {
  it("decrease counter by 1", () => {
    render(<Counter />);
    expect(screen.getByRole("heading")).toHaveTextContent("0");
    fireEvent.click(screen.getByText("Decrease"));
    expect(screen.getByRole("heading")).toHaveTextContent("1");
  });
});