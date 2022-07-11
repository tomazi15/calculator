import { render, screen } from "@testing-library/react";
import RecentHistoryResults from "./RecentHistoryResults";

describe("RecentHistoryResults", () => {
  test("should display results history heading", () => {
    const resultsMemory = [];

    render(<RecentHistoryResults resultsMemory={resultsMemory} />);

    const historyResultsHeading = screen.queryByText("Recent Results:");

    expect(historyResultsHeading).toBeInTheDocument();
  });

  test("should not display any chips if memory array is empty", () => {
    const resultsMemory = [];

    render(<RecentHistoryResults resultsMemory={resultsMemory} />);

    const historyResultsChips = screen.queryByText("269");

    expect(historyResultsChips).not.toBeInTheDocument();
  });

  test("if calculations history exists it should be displayed in chip", () => {
    const resultsMemory = ["100", "1"];

    render(<RecentHistoryResults resultsMemory={resultsMemory} />);

    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
