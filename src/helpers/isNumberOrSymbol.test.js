import { isNumberOrSymbol } from "./isNumberOrSymbol";

describe("isNumberOrSymbol", () => {
  test("isNumberOrSymbol return true if symbol selected", () => {
    const symbol = isNumberOrSymbol("/");
    expect(symbol).toBe(true);
  });

  test("isNumberOrSymbol return false if unexpected symbol selected", () => {
    const symbol = isNumberOrSymbol("#");
    expect(symbol).toBe(false);
  });
});
