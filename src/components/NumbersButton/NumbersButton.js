import { Button } from "@mui/material";
import {
  calculatorNumbers,
  calculatorSymbols,
} from "../../data/claculatorSymbols";
import {
  addNumber,
  addSymbol,
  addSecondNumber,
} from "../../features/calculatorSlice";
import { useDispatch, useSelector } from "react-redux";

const NumbersButton = () => {
  const dispatch = useDispatch();
  const symbolValue = useSelector((state) => state.calculator.symbol);

  console.log(symbolValue.length);

  const helperFunction = (value) =>
    symbolValue.length !== 0
      ? dispatch(addSecondNumber(value))
      : dispatch(addNumber(value));

  const handleNumberClick = (e) => {
    const numberOrSymbol = calculatorSymbols.some((x) => x === e.target.value);
    numberOrSymbol
      ? dispatch(addSymbol(e.target.value))
      : helperFunction(e.target.value);
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
