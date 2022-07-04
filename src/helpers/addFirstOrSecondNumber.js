import { addFirstNumber, addSecondNumber } from "../features/calculatorSlice";

const addFirstOrSecondNumber = (value, symbolValue, dispatch) => {
  symbolValue.length !== 0
    ? dispatch(addSecondNumber(value))
    : dispatch(addFirstNumber(value));
};

export default addFirstOrSecondNumber;
