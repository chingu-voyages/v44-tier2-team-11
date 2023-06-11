import React, { useContext } from "react";

const LeaderboardHeader = () => {
    return(
        <div className=" flex flex-row justify-evenly h-min my-1">
            <div className="flex items-center justify-center w-16 font-bold">
                Rank
            </div>
            <div className="flex items-center justify-center w-16 font-bold">
                Bot
            </div>
            <div className="flex items-center justify-center w-16 font-bold">
                Win
            </div>
            <div className="flex items-center justify-center w-16 font-bold">
                Loss
            </div>
    </div>
    );
}

export default LeaderboardHeader;