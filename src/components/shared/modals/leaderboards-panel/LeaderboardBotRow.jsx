import React, { useContext } from 'react';
import BotDynamic from '../../bots/BotDynamic.jsx';
import LeaderboardScoreCounter from './LeaderboardScoreCounter.jsx';
import AwardFirst from '../../icons/AwardFirst.jsx';

const LeaderboardBotRow = (BotScore) => {
  let bgColor = '#36454f'; //default background color
  let strokeColor = '#101314'; //default stroke coloe
  let rank = BotScore.i; //default
  let rScale = '70%'; //default scale

  if (BotScore.i === 1) {
    bgColor = '#c9b037';
    strokeColor = '#af9500';
    rank = '1st';
    rScale = '100%'; //first place
  } else if (BotScore.i === 2) {
    bgColor = '#d7d7d7';
    strokeColor = '#b4b4b4';
    rank = '2nd';
    rScale = '90%'; //second place
  } else if (BotScore.i === 3) {
    bgColor = '#ad8a56';
    strokeColor = '#6a3805';
    rank = '3rd';
    rScale = '80%'; //third place
  }

  return (
    <div className="my-1 flex h-min flex-row justify-evenly">
      <div className="my-3 flex h-16 w-16 translate-y-3 justify-center text-white">
        <div
          style={{
            backgroundColor: bgColor,
            borderColor: strokeColor,
            width: rScale,
            height: rScale,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          className="m-auto flex items-center justify-center rounded-full border-2 border-primary-700 bg-primary-300 text-2xl font-extrabold"
        >
          {rank}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center align-middle">
        <div
          style={{
            backgroundColor: BotScore.background,
            borderColor: BotScore.stroke,
          }}
          className="relative my-3 flex h-16 w-16 translate-y-3 justify-center rounded-full border-2 border-primary-700 bg-primary-300 object-contain p-3"
        >
          {/* bot figure */}
          <BotDynamic
            className="h-full w-9/12"
            strokeColor={BotScore.stroke}
            baseColor={BotScore.base}
          />
        </div>
        {/* bot name */}
        <div
          style={{
            backgroundColor: BotScore.base,
            borderColor: BotScore.stroke,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          }}
          className="-translate-y-3 rounded-lg border-2 bg-primary-500 px-2 py-1 text-center text-xs font-semibold text-white"
        >
          {BotScore.botName}
        </div>
      </div>
      <div className="my-3 flex h-16 w-16 translate-y-3 justify-center">
        <div className="m-auto flex items-center justify-center">
          <LeaderboardScoreCounter val={BotScore.win} />
        </div>
      </div>
      <div className="my-3 flex h-16 w-16 translate-y-3 justify-center">
        <div className="m-auto flex items-center justify-center">
          <LeaderboardScoreCounter val={BotScore.loss} />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardBotRow;
