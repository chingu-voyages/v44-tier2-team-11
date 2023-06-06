import React, { useContext, useState } from "react";
import Modal from "../../base/Modal.jsx";
import BotFig from "../bots/BotFig.jsx";
import GlobalContext from "../../../contexts/global-context/global-context.js";

const WinCounter = (val) => {
    return(
        <div className="flex justify-center items-center font-bold">
        { val.win }
        </div>
    );
}

const LossCounter = (val) => {
    return(
        <div className="flex justify-center items-center font-bold">
        { val.loss }
        </div>
    );
}

const TieCounter = (val) => {
    return(
        <div className="flex justify-center items-center font-bold">
        { val.tie }
        </div>
    );
}

const BotScoreRow = (botScore) => {
    return(
        <div className="flex flex-row justify-evenly h-min my-1">
            {/* <div>
                crowned
            </div> */}
            <div className="flex flex-col justify-center align-middle items-center">
            {/* <div style={{color: botScore.color}} className="relative object-cover w-20 my-3 h-full rounded-full"> */}
                <div style={{backgroundColor:botScore.bgColor, borderColor:botScore.bColor}} className="bg-primary-300 border-2 border-primary-700 relative translate-y-3 object-contain w-16 my-3 h-16 rounded-full flex justify-center">
                    {/* bot sample */}
                    <BotFig scale='45' priColor={ botScore.color } bColor={ botScore.bColor }/>
                </div>
                <div style={{backgroundColor:botScore.bColor}} className="bg-primary-500 text-primary-50 p-1 rounded-lg -translate-y-3 text-center font-semibold text-xs">
                    {botScore.botName}
                </div>
            </div>
            <WinCounter win={ botScore.win }/>
            <LossCounter loss={ botScore.loss }/>
            <TieCounter tie={ botScore.tie }/>
    </div>
    );
}

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
// class Leaderboard extends React.Component {
const Leaderboard = () => {

    // render(){
        const { showLeaderboard, setShowLeaderboard } = useContext(GlobalContext);

        const onClickCloseModal = () =>{
            setShowLeaderboard(false);
        }

        return(
            <Modal
            mainContentWrapperClassName="w-11/12 max-w-3xl overflow-hidden"
            shouldShow={showLeaderboard}
            onClickCloseModal={onClickCloseModal}          
            >

                <LeaderboardHeader />
                {/* <Header title='Leaderboard' allBots={this.state.bots.length}/> */}
                {/* bots score list */}
                {
                    // this.state.bots.map( bot =>
                    // <BotScoreRow
                    // id={bot.id}
                    // botName={bot.name}
                    // key={bot.id.toString()}
                    // win={bot.win}
                    // loss={bot.loss}
                    // tie={bot.tie}
                    // color={bot.color}
                    // bColor={bot.bColor}
                    // bgColor={bot.bgColor}
                    // />
                    // )
                }



            </Modal>

        );
    // }
}

const state = {
    bots: [
        {
            id: '1',
            name: 'BotRed',
            win: 1,
            loss: 1,
            tie:1,
            color: '#EF5350',
            bColor: '#B91C19',
            bgColor: '#FFC8C7',
        },
        {
            id: '2',
            name: 'BotBlue',
            win: 2,
            loss: 2,
            tie: 2,
            color: '#42A5F5',
            bColor: '#1C78C2',
            bgColor: '#D0EAFF',
        },
        {
            id: '3',
            name: 'BotYellow',
            win: 3,
            loss: 3,
            tie: 3,
            color: '#F6D62A',
            bColor: '#BAA11D',
            bgColor: '#FFF3B6',
        },
        {
            id: '4',
            name: 'BotEmerald',
            win: 4,
            loss: 4,
            tie: 4,
            color: '#3EC2BC',
            bColor: '#137D78',
            bgColor: '#C7FFFD',
        },
    ]
};
export default Leaderboard;
