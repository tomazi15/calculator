import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  symbol: "",
  result: "",
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
  },
});

export const { addFirstNumber, addSecondNumber, addSymbol } =
  calculatorNumberSlice.actions;
export default calculatorNumberSlice.reducer;
