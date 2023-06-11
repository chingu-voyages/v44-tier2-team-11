import React, { useContext } from "react";

const LeaderboardScoreCounter = (val) => {
    return(
        <div className="flex justify-center items-center font-bold">
        { val.val }
        </div>
    );
}

export default LeaderboardScoreCounter;