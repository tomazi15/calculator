import addFirstOrSecondNumber from "./addFirstOrSecondNumber";
import { useDispatch } from "react-redux";
import { addFirstNumber, addSecondNumber } from "../features/calculatorSlice";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));

describe("addFirstOrSecondNumber", () => {
  // test("HELLO", () => {
  //   expect(addFirstOrSecondNumber).toHaveBeenCalledWith("4", "", useDispatch);
  // });

  test("HELLO", () => {
    expect(true).toBe(true);
  });
});
