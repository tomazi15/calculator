import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  symbol: "",
};

export const calculatorNumberSlice = createSlice({
  name: "calculatorNumber",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.firstNumber += action.payload;
    },
    addSecondNumber: (state, action) => {
      state.secondNumber += action.payload;
    },
    addSymbol: (state, action) => {
      state.symbol = action.payload;
    },
  },
});

export const { addNumber, addSecondNumber, addSymbol } =
  calculatorNumberSlice.actions;
export default calculatorNumberSlice.reducer;
