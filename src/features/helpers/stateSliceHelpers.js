export const initialState = {
  firstNumber: "",
  secondNumber: "",
  symbol: "",
  result: "",
  memory: [],
};

export const resetState = (state, resetResults) => {
  console.log(resetResults);
  state.firstNumber = "";
  state.secondNumber = "";
  state.symbol = "";
  if (resetResults) return (state.result = "");
};
