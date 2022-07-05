import { Chip } from "@mui/material";
import { useSelector } from "react-redux";
import "./RecentHistoryResults.scss";

const RecentHistoryResults = () => {
  const resultsMemory = useSelector((state) => state.calculator.memory);

  console.log(resultsMemory);

  return (
    <div className="RecentHistoryResults">
      Recent Results:
      <div className="RecentHistoryResults__results">
        {resultsMemory.map((recentResult, index) => {
          return (
            <Chip
              className="RecentHistoryResults__results--chip"
              key={index}
              label={recentResult}
              color="success"
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentHistoryResults;
