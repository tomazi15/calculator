import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  symbol: "",
  result: "",
  memory: [],
};

export const calculatorNumberSlice = createSlice({
  name: "calculatorNumber",
  initialState,
  reducers: {
    addFirstNumber: (state, action) => {
      state.firstNumber += action.payload;
    },
    addSecondNumber: (state, action) => {
      state.secondNumber += action.payload;
    },
    addSymbol: (state, action) => {
      state.symbol = action.payload;
    },
    getSummery: (state, action) => {
      action.payload.map((payload) => {
        if (payload === "+") {
          state.result = (
            Number(state.firstNumber) + Number(state.secondNumber)
          ).toFixed(2);
          state.firstNumber = "";
          state.secondNumber = "";
          state.symbol = "";
        }
        if (payload === "-") {
          state.result = (
            Number(state.firstNumber) - Number(state.secondNumber)
          ).toFixed(2);
          state.firstNumber = "";
          state.secondNumber = "";
          state.symbol = "";
        }
        if (payload === "*") {
          (state.result =
            Number(state.firstNumber) * Number(state.secondNumber)).toFixed(2);
          state.firstNumber = "";
          state.secondNumber = "";
          state.symbol = "";
        }
        if (payload === "/") {
          state.result = (
            Number(state.firstNumber) / Number(state.secondNumber)
          ).toFixed(2);
          state.firstNumber = "";
          state.secondNumber = "";
          state.symbol = "";
        }
      });
      state.memory.push(state.result);
    },
    clearStore: (state) => {
      state.firstNumber = "";
      state.secondNumber = "";
      state.symbol = "";
      state.result = "";
    },
  },
});

export const {
  addFirstNumber,
  addSecondNumber,
  addSymbol,
  getSummery,
  clearStore,
} = calculatorNumberSlice.actions;
export default calculatorNumberSlice.reducer;
