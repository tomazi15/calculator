import { Button } from "@mui/material";
import {
  calculatorNumbers,
  calculatorSymbols,
} from "../../data/claculatorSymbols";
import { addSymbol } from "../../features/calculatorSlice";
import { useDispatch, useSelector } from "react-redux";
import addFirstOrSecondNumber from "../../helpers/addFirstOrSecondNumber";
import { isNumberOrSymbol } from "../../helpers/isNumberOrSymbol";

const NumbersButton = () => {
  const dispatch = useDispatch();
  const symbolValue = useSelector((state) => state.calculator.symbol);

  const handleNumberClick = (e) => {
    isNumberOrSymbol(e.target.value)
      ? dispatch(addSymbol(e.target.value))
      : addFirstOrSecondNumber(e.target.value, symbolValue, dispatch);
  };

  return (
    <>
      {calculatorNumbers.map((number, index) => {
        return (
          <Button
            key={index}
            value={number}
            onClick={handleNumberClick}
            variant="contained"
          >
            {number}
          </Button>
        );
      })}
      {calculatorSymbols.map((symbol, index) => {
        return (
          <Button
            key={index}
            value={symbol}
            onClick={handleNumberClick}
            variant="contained"
          >
            {symbol}
          </Button>
        );
      })}
    </>
  );
};

export default NumbersButton;
