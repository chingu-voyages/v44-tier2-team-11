import React, { useContext } from "react";
import BotDynamic from "../../bots/BotDynamic.jsx";
import LeaderboardScoreCounter from "./LeaderboardScoreCounter.jsx";

const LeaderboardBotRow = (BotScore) => {
    let bgColor = "#36454f"; //default background color
    let strokeColor = "#101314"; //default stroke coloe
    let rank = BotScore.i; //default
    let rScale = "70%" //default scale

    if (BotScore.i === 1) {
        bgColor = "#c9b037"; strokeColor = "#af9500"; rank = "1st"; rScale = "100%" //first place
    } else if (BotScore.i === 2) {
        bgColor = "#d7d7d7"; strokeColor = "#b4b4b4"; rank = "2nd"; rScale = "90%" //second place
    } else if (BotScore.i === 3) {
        bgColor = "#ad8a56"; strokeColor = "#6a3805"; rank = "3rd"; rScale = "80%" //third place
    }

    return(
        <div className="flex flex-row justify-evenly h-min my-1">
            <div className="w-16 my-3 h-16 flex translate-y-3 justify-center text-white">
                <div style={{backgroundColor:bgColor, borderColor:strokeColor, width:rScale, height:rScale, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} className="m-auto flex items-center justify-center bg-primary-300 border-2 border-primary-700 rounded-full font-extrabold text-2xl">
                    {rank}
                </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center">
                <div style={{backgroundColor:BotScore.background, borderColor:BotScore.stroke}} className="bg-primary-300 border-2 border-primary-700 relative translate-y-3 object-contain w-16 my-3 h-16 rounded-full flex justify-center">
                    {/* bot figure */}
                    <BotDynamic className='h-full w-9/12' strokeColor={ BotScore.stroke } baseColor={ BotScore.base }/>
                </div>
                    {/* bot name */}
                <div style={{backgroundColor:BotScore.base, borderColor:BotScore.stroke, textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}} className="bg-primary-500 border-2 text-white p-1 rounded-lg -translate-y-3 text-center font-semibold text-xs">
                    {BotScore.botName}
                </div>
            </div>
            <LeaderboardScoreCounter val={ BotScore.win }/> 
            <LeaderboardScoreCounter val={ BotScore.loss }/>
        </div>

    )

}

export default LeaderboardBotRow;