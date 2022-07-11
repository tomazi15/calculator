import { screen } from "@testing-library/react";
import ActionsButton from "./ActionsButton";
import { renderWithProviders } from "../../utils/test-utils";

describe("ActionsButton", () => {
  test("should render all button", async () => {
    renderWithProviders(<ActionsButton />);

    const actionButtons = await screen.findAllByRole("button");

    expect(actionButtons).toHaveLength(2);
  });
});
