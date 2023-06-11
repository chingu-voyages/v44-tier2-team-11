import React, { useContext } from "react";
import BotDynamic from "../../bots/BotDynamic.jsx";
import LeaderboardScoreCounter from "./LeaderboardScoreCounter.jsx";

const LeaderboardBotRow = (BotScore) => {

    return(
        <div className="flex flex-row justify-evenly h-min my-1">
        {/* <div>
            crowned
        </div> */}
            <div className="flex flex-col justify-center align-middle items-center">
            {/* <div style={{color: botScore.color}} className="relative object-cover w-20 my-3 h-full rounded-full"> */}
                <div style={{backgroundColor:BotScore.background, borderColor:BotScore.stroke}} className="bg-primary-300 border-2 border-primary-700 relative translate-y-3 object-contain w-16 my-3 h-16 rounded-full flex justify-center">
                    {/* bot sample */}
                    <BotDynamic className='h-full w-10/12' strokeColor={ BotScore.stroke } baseColor={ BotScore.base }/>
                </div>
                <div style={{backgroundColor:BotScore.base}} className="bg-primary-500 text-primary-50 p-1 rounded-lg -translate-y-3 text-center font-semibold text-xs">
                    {BotScore.botName}
                </div>
            </div>
            <LeaderboardScoreCounter val={ BotScore.win }/>
            <LeaderboardScoreCounter val={ BotScore.loss }/>
            <LeaderboardScoreCounter val={ BotScore.tie }/>
        </div>

    )

}

export default LeaderboardBotRow;