import { Chip } from "@mui/material";
import "./RecentHistoryResults.scss";

const RecentHistoryResults = ({ resultsMemory }) => {
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
