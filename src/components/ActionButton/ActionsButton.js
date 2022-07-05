import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./ActionsButton.scss";
import { getSummery, clearStore } from "../../features/calculatorSlice";

const ActionsButton = () => {
  const dispatch = useDispatch();
  const firstNumberValue = useSelector((state) => state.calculator.firstNumber);
  const secondNumberValue = useSelector(
    (state) => state.calculator.secondNumber
  );
  const symbolValue = useSelector((state) => state.calculator.symbol);

  const handlerEqualsClick = () => {
    dispatch(getSummery([firstNumberValue, secondNumberValue, symbolValue]));
  };

  const handlerClearClick = () => {
    dispatch(clearStore({}));
  };

  return (
    <div className="ActionsButton">
      <Button
        key="equals"
        value="="
        onClick={handlerEqualsClick}
        variant="contained"
        color="secondary"
      >
        =
      </Button>
      <Button
        key="clear"
        value="Clear"
        onClick={handlerClearClick}
        variant="contained"
        color="secondary"
      >
        Clear
      </Button>
    </div>
  );
};

export default ActionsButton;
