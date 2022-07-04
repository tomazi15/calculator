import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { operationSymbols } from "../../data/claculatorSymbols";
import ActionsButton from "../ClearButton/ActionsButton";
import NumbersButton from "../NumbersButton/NumbersButton";
import "./Calculator.scss";

const Calculator = () => {
  const firstNumberValue = useSelector((state) => state.calculator.firstNumber);
  const secondNumberValue = useSelector(
    (state) => state.calculator.secondNumber
  );
  const symbolValue = useSelector((state) => state.calculator.symbol);

  return (
    <div className="Calculator">
      <TextField
        className="Calculator__firstNumber"
        color="secondary"
        id="outlined-basic"
        variant="outlined"
        value={firstNumberValue}
        disabled
      />
      <TextField
        className="Calculator__secondNumber"
        id="outlined-basic"
        variant="outlined"
        value={secondNumberValue}
        disabled
      />
      <p>
        Operation:
        <strong>
          <span className="Calculator__operator">
            {operationSymbols[symbolValue]}
          </span>
        </strong>
      </p>
      <span>Result: {"TBC"}</span>
      <NumbersButton />
      <ActionsButton />
    </div>
  );
};

export default Calculator;
