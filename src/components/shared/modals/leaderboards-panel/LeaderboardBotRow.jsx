import React, { useContext } from 'react';
import BotDynamic from '../../bots/BotDynamic.jsx';
import LeaderboardScoreCounter from './LeaderboardScoreCounter.jsx';
import AwardFirst from '../../icons/AwardFirst.jsx';
import AwardSecond from '../../icons/AwardSecond.jsx';
import AwardThird from '../../icons/AwardThird.jsx';

const LeaderboardBotRow = (BotScore) => {
  let rank = BotScore.i; //default

  return (
    <div className="my-1 flex h-min flex-row justify-evenly">
      <div className="my-3 flex h-16 w-16 translate-y-3 justify-center text-white">
        {rank === 1 ? (
          <AwardFirst />
        ) : rank === 2 ? (
          <AwardSecond />
        ) : rank === 3 ? (
          <AwardThird />
        ) : null}
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
