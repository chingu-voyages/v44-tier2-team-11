import React, { useContext } from "react";
import GlobalContext from "../../../../contexts/global-context/global-context";
import LeaderboardBotRow from "./LeaderboardBotRow";

const LeaderboardScoreRows = () =>{

    const { botScores } = useContext(GlobalContext);

    return(
        <>
        {
            botScores.current?.map( (bot) => {
            return (
                <LeaderboardBotRow
                    id={bot.id}
                    botName={bot.name}
                    key={bot.id}
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