import { calculatorSymbols } from "../data/claculatorSymbols";

export const isNumberOrSymbol = (value) =>
  calculatorSymbols.some((symbol) => symbol === value);
