import React, { useContext } from "react";

const LeaderboardHeader = () => {
    return(
        <div className=" flex flex-row justify-evenly h-min my-4">
            {/* <div className="flex justify-center items-center">
                Standing
            </div> */}
            <div className="flex justify-center items-center font-bold">
                Bot Name:
            </div>
            <div className="flex justify-center items-center font-bold">
                Win
            </div>
            <div className="flex justify-center items-center font-bold">
                Loss
            </div>
            <div className="flex justify-center items-center font-bold">
                Tie
            </div>
    </div>
    );
}

export default LeaderboardHeader;