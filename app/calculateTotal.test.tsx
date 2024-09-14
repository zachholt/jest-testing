import { render, screen, fireEvent } from "@testing-library/react";
import CalculateTotal from "./CalculateTotal";


describe("CalculateTotal component", () => {
    it("renders correctly with initial total of 0", () => {
        render(<CalculateTotal />);
        expect(screen.getByText(/total:/i)).toHaveTextContent("Total: 0");
    });

    it("adds a number", () => {
        render(<CalculateTotal />);
        const input = screen.getByPlaceholderText("Enter a value");
        const addButton = screen.getByText("Add");

        // Input 5 and add it
        fireEvent.change(input, { target: { value: 5 } });
        fireEvent.click(addButton);
        
        expect(screen.getByText(/total:/i)).toHaveTextContent("Total: 5");
    });

    it("subtracts a number from 0", () => {
        render(<CalculateTotal />);
        const input = screen.getByPlaceholderText("Enter a value");
        const subtractButton = screen.getByText("Subtract");

        // Input 5 and subtract it
        fireEvent.change(input, { target: { value: 5 } });
        fireEvent.click(subtractButton);
        
        expect(screen.getByText(/total:/i)).toHaveTextContent("Total: -5");
    });

    it("handles zero input", () => {
        render(<CalculateTotal />);
        const input = screen.getByPlaceholderText("Enter a value");
        const addButton = screen.getByText("Add");
        const subtractButton = screen.getByText("Subtract");

        // Input 0 and add it
        fireEvent.change(input, { target: { value: 0 } });
        fireEvent.click(addButton);
        expect(screen.getByText(/total:/i)).toHaveTextContent("Total: 0");

        // Input 0 and subtract it
        fireEvent.click(subtractButton);
        expect(screen.getByText(/total:/i)).toHaveTextContent("Total: 0");
    });

    it("handles values other than a number", () => {
        render(<CalculateTotal />);
        const input = screen.getByPlaceholderText("Enter a value");
        const addButton = screen.getByText("Add");
        const subtractButton = screen.getByText("Subtract");

        // Input text and add it
        fireEvent.change(input, { target: { value: "one" } });
        fireEvent.click(addButton);
        expect(screen.getByText(/total:/i)).toHaveTextContent("Total: 0");
    });

      it('renders homepage unchanged', () => {
        const { container } = render(<CalculateTotal />)
        expect(container).toMatchSnapshot()
      })
});