import React, { useState } from "react";
import BotBlue from "../bots/BotBlue.jsx";
import BotRed from "../bots/BotRed.jsx";
import BotYellow from "../bots/BotYellow.jsx";
import BotEmerald from "../bots/BotEmerald.jsx";
import BotFig from "../bots/BotFig.jsx";


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
class Leaderboard extends React.Component {

    state = {
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


    render(){
        return(
            <div className="modal absolute w-full h-full flex justify-center items-center bg-primary-950 bg-opacity-30 backdrop-blur-sm">
                <div className="container absolute bg-primary-50 w-2/4 rounded-3xl pb-4">
                    <div className="mx-5 my-4 flex justify-end">
                        {/* <button className="close-btn"></button> */}
                        <button type="button" className="close_lbModal bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-form-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-950">
                          {/* <span className="sr-only">Close menu</span> */}
                          <svg className="h-6 w-6 text-form-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                    </div>
                    <LeaderboardHeader />
                {/* <Header title='Leaderboard' allBots={this.state.bots.length}/> */}
                {/* bots score list */}
                {
                    this.state.bots.map( bot =>
                    <BotScoreRow
                    id={bot.id}
                    botName={bot.name}
                    key={bot.id.toString()}
                    win={bot.win}
                    loss={bot.loss}
                    tie={bot.tie}
                    color={bot.color}
                    bColor={bot.bColor}
                    bgColor={bot.bgColor}
                    />
                    )
                }
                </div>
            </div>
        );
    }
}

export default Leaderboard;
