import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { operationSymbols } from "../../data/claculatorSymbols";
import ActionsButton from "../ActionButton/ActionsButton";
import NumbersButton from "../NumbersButton/NumbersButton";
import RecentHistoryResults from "../RecentHistoryResults/RecentHistoryResults";
import "./Calculator.scss";

const Calculator = () => {
  const firstNumberValue = useSelector((state) => state.calculator.firstNumber);
  const secondNumberValue = useSelector(
    (state) => state.calculator.secondNumber
  );
  const symbolValue = useSelector((state) => state.calculator.symbol);
  const resultValue = useSelector((state) => state.calculator.result);

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
      <strong>
        <span className="Calculator__operator">
          {operationSymbols[symbolValue]}
        </span>
      </strong>
      <TextField
        className="Calculator__secondNumber"
        id="outlined-basic"
        variant="outlined"
        value={secondNumberValue}
        disabled
      />
      <p>
        Result:
        <strong>
          <span className="Calculator__result"> {resultValue}</span>
        </strong>
      </p>

      <NumbersButton />
      <ActionsButton />
      <RecentHistoryResults />
    </div>
  );
};

export default Calculator;
