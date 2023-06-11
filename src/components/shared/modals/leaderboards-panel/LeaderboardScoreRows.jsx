import React, { useContext } from "react";
import GlobalContext from "../../../../contexts/global-context/global-context";
import LeaderboardBotRow from "./LeaderboardBotRow";

const LeaderboardScoreRows = () =>{

    const { botScores } = useContext(GlobalContext);
    const rankedBots = botScores.current?.sort((a, b) => b.win - a.win);
    return(
        <>
        {
            rankedBots?.map( (bot, i) => {
            return (
                <LeaderboardBotRow
                    id={bot.id}
                    botName={bot.name}
                    i={i+1}
                    key={i}
                    win={bot?.win}
                    loss={bot?.lose}
                    background={bot?.colorSchemes.background}
                    stroke={bot?.colorSchemes.stroke}
                    base={bot?.colorSchemes.base}
                    border={bot?.colorSchemes.border}
                />
                )
            })
        }
        </>
    );
}


export default LeaderboardScoreRows;