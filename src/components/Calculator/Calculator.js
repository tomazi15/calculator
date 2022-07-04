import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import NumbersButton from "../NumbersButton/NumbersButton";

const Calculator = () => {
  const firstNumberValue = useSelector((state) => state.calculator.firstNumber);
  const secondNumberValue = useSelector(
    (state) => state.calculator.secondNumber
  );
  const symbolValue = useSelector((state) => state.calculator.symbol);

  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={firstNumberValue}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={secondNumberValue}
      />
      <span>Operation: {symbolValue}</span>
      <span>Result: {"TBC"}</span>
      <NumbersButton />
    </>
  );
};

export default Calculator;
