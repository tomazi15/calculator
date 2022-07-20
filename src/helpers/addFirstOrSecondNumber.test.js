import addFirstOrSecondNumber from "./addFirstOrSecondNumber";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("addFirstOrSecondNumber", () => {
  test("if the user does not select symbol character the first number will be added", () => {
    const payloadMock = {
      payload: "4",
      type: "calculatorNumber/addFirstNumber",
    };

    addFirstOrSecondNumber("4", "", mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(payloadMock);
  });

  test("if the user selects symbol second number will be added", () => {
    const payloadMock = {
      payload: "",
      type: "calculatorNumber/addSecondNumber",
    };

    addFirstOrSecondNumber("", "/", mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(payloadMock);
  });
});
