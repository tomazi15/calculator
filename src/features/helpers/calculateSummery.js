import { resetState } from "./stateSliceHelpers";

export const calculateSummery = (state, action) => {
  action.payload.map((payload) => {
    if (payload === "+") {
      state.result = (
        Number(state.firstNumber) + Number(state.secondNumber)
      ).toFixed(2);
      resetState(state, false);
    }
    if (payload === "-") {
      state.result = (
        Number(state.firstNumber) - Number(state.secondNumber)
      ).toFixed(2);
      resetState(state, false);
    }
    if (payload === "*") {
      (state.result =
        Number(state.firstNumber) * Number(state.secondNumber)).toFixed(2);
      resetState(state, false);
    }
    if (payload === "/") {
      state.result = (
        Number(state.firstNumber) / Number(state.secondNumber)
      ).toFixed(2);
      resetState(state, false);
    }
  });
};
