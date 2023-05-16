import React from "react";

const WinCounter = (val) => {
    return(
        <div>
        { val.win }
        </div>
    );
} 

const LossCounter = (val) => {
    return(
        <div>
        { val.loss }
        </div>
    );
} 

const TieCounter = (val) => {
    return(
        <div>
        { val.tie }
        </div>
    );
} 

const BotScoreRow = (botScore) => {
    return(
        <div className="bg-form-500 flex flex-row justify-evenly h-min my-4">
            <div>
                crowned
            </div>
            <div>
                <div className="bg-form-700 relative w-2/4 my-3 h-full rounded-full">
                    
                </div>
                <div className=""></div>
                botImage
            </div>
            <WinCounter win={ botScore.win }/>
            <LossCounter loss={ botScore.loss }/>
            <TieCounter tie={ botScore.tie }/>
    </div>
    );
}

const Header = (p) => 
<header id="head" className="max-w-7xl mx-auto px-4 bg-primary-300 sm:px-6 lg:px-8">
    <h1>{p.title}</h1>
    <span className="stats">Players: {p.allBots}</span>
</header>
;

class Leaderboard extends React.Component {

    state = {
        bots: [
            {
                id: '1',
                name: 'BotRed',
                win: 1,
                loss: 1,
                tie:1,
            },
            {
                id: '2',
                name: 'BotBlue',
                win: 2,
                loss: 2,
                tie: 2,
            },
            {
                id: '3',
                name: 'BotYellow',
                win: 3,
                loss: 3,
                tie: 3,
            },
            {
                id: '4',
                name: 'BotGreen',
                win: 4,
                loss: 4,
                tie: 4,
            },
        ]
    };

    
    render(){
        return(
            <div className="modal absolute w-full h-full flex justify-center items-center bg-primary-950 bg-opacity-30 backdrop-blur-sm">
                <div className="container absolute w-2/4  bg-form-800 rounded-md mx-auto">
                    <div className="mx-5 my-4 flex justify-end">
                        <button className="">x</button>
                    </div>
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
                    /> 
                    )
                }
                </div>
            </div>
        );
    }
}

export default Leaderboard;