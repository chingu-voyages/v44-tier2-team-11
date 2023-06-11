import React, { useContext } from "react";

const LeaderboardHeader = () => {
    return(
        <div className=" flex flex-row justify-evenly h-min my-4">
            {/* <div className="flex justify-center items-center">
                Standing
            </div> */}
            <div className="flex justify-center items-center font-bold">
                Rank
            </div>
            <div className="flex justify-center items-center font-bold">
                Bot
            </div>
            <div className="flex justify-center items-center font-bold">
                Win
            </div>
            <div className="flex justify-center items-center font-bold">
                Loss
            </div>
    </div>
    );
}

export default LeaderboardHeader;