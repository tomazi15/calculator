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
  const resultsMemory = useSelector((state) => state.calculator.memory);

  return (
    <div className="Calculator">
      <h2>Calculator</h2>
      <div>
        <TextField
          inputProps={{ "aria-label": "firstNumber" }}
          className="Calculator__firstNumber"
          id="outlined-basic"
          variant="outlined"
          value={firstNumberValue}
          disabled
        />
      </div>
      <strong>
        <span data-testid="operator" className="Calculator__operator">
          {operationSymbols[symbolValue]}
        </span>
      </strong>
      <TextField
        inputProps={{ "aria-label": "secondNumber" }}
        className="Calculator__secondNumber"
        id="outlined-basic"
        variant="outlined"
        value={secondNumberValue}
        disabled
      />
      <p>
        Result:
        <strong>
          <span data-testid="result" className="Calculator__result">
            {resultValue}
          </span>
        </strong>
      </p>

      <NumbersButton />
      <ActionsButton />

      {resultsMemory.length > 0 && (
        <RecentHistoryResults resultsMemory={resultsMemory} />
      )}
    </div>
  );
};

export default Calculator;
