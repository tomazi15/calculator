import Calculator from "./Calculator";
import { renderWithProviders } from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Calculator", () => {
  test("should render all the component elements", () => {
    renderWithProviders(<Calculator />);

    const firstNumberDisplay = screen.getByRole("textbox", {
      name: /firstNumber/i,
    });
    const operatorSelected = screen.getByTestId("operator");
    const secondNumberDisplay = screen.getByRole("textbox", {
      name: /secondNumber/i,
    });
    const calculatorNumberButtons = screen.getByTestId("numberButtons");
    const calculatorActionButtons = screen.getByTestId("actionButtons");
    const historyResultsHeading = screen.queryByText("Recent Results:");

    expect(firstNumberDisplay).toBeInTheDocument();
    expect(operatorSelected).toBeInTheDocument();
    expect(secondNumberDisplay).toBeInTheDocument();
    expect(calculatorNumberButtons).toBeInTheDocument();
    expect(calculatorActionButtons).toBeInTheDocument();
    expect(historyResultsHeading).not.toBeInTheDocument();
  });

  test("should display clicked number in first number display", () => {
    renderWithProviders(<Calculator />);

    // Enter the first number
    const numberOne = screen.getByRole("button", { name: /1/i });
    userEvent.click(numberOne);
    userEvent.click(numberOne);
    const firstNumberDisplay = screen.getByRole("textbox", {
      name: /firstNumber/i,
    });
    expect(firstNumberDisplay.value).toEqual("11");

    // Enter the operator
    const subtractOperator = screen.getByRole("button", { name: /-/i });
    userEvent.click(subtractOperator);
    const operatorSelected = screen.getByTestId("operator").textContent;
    expect(operatorSelected).toEqual("Subtract");

    // Enter the seconde number
    const secondNumberDisplay = screen.getByRole("textbox", {
      name: /secondNumber/i,
    });
    const numberSix = screen.getByRole("button", { name: /6/i });
    userEvent.click(numberSix);
    expect(secondNumberDisplay.value).toEqual("6");

    // Get the calculation result
    const getTheResult = screen.getByRole("button", { name: /=/i });
    userEvent.click(getTheResult);
    const result = screen.getByTestId("result").textContent;
    expect(result).toEqual("5.00");

    // Clear the calculator
    const clearCalculator = screen.getByRole("button", { name: /Clear/i });
    userEvent.click(clearCalculator);

    // Confirm the chip remains after clearing previous calculation
    expect(screen.getByText("5.00")).toBeInTheDocument();
  });
});
