export const initialState = {
  firstNumber: "",
  secondNumber: "",
  symbol: "",
  result: "",
  memory: [],
};

export const resetState = (state, resetResults) => {
  state.firstNumber = "";
  state.secondNumber = "";
  state.symbol = "";
  if (resetResults) return (state.result = "");
};
