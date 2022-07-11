import { screen } from "@testing-library/react";
import NumbersButton from "./NumbersButton";
import { renderWithProviders } from "../../utils/test-utils";

describe("NumbersButton", () => {
  test("should render all button", async () => {
    renderWithProviders(<NumbersButton />);

    const calculatorButtons = await screen.findAllByRole("button");

    expect(calculatorButtons).toHaveLength(14);
  });
});
