import { createSlice } from "@reduxjs/toolkit";
import { resetState, initialState } from "../helpers/state/stateSliceHelpers";
import { calculateSummery } from "../helpers/state/calculateSummery";

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
      calculateSummery(state, action);
      state.memory.push(state.result);
    },
    clearStore: (state) => {
      resetState(state, true);
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
