import { Button } from "@mui/material";
import {
  calculatorNumbers,
  calculatorSymbols,
  specialSymbols,
} from "../../data/claculatorSymbols";
import { addSymbol } from "../../features/calculatorSlice";
import { useDispatch, useSelector } from "react-redux";
import addFirstOrSecondNumber from "../../helpers/addFirstOrSecondNumber";
import { isNumberOrSymbol } from "../../helpers/isNumberOrSymbol";
import "./ActionsButton.scss";

const ActionsButton = () => {
  // const dispatch = useDispatch();
  // const symbolValue = useSelector((state) => state.calculator.symbol);

  // const handleNumberClick = (e) => {
  //   isNumberOrSymbol(e.target.value)
  //     ? dispatch(addSymbol(e.target.value))
  //     : addFirstOrSecondNumber(e.target.value, symbolValue, dispatch);
  // };

  return (
    <div className="ActionsButton">
      {specialSymbols.map((number, index) => {
        return (
          <Button
            key={index}
            value={number}
            // onClick={handleNumberClick}
            variant="contained"
            color="secondary"
          >
            {number}
          </Button>
        );
      })}
    </div>
  );
};

export default ActionsButton;
