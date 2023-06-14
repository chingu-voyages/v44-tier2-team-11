import Bot from './ArenaBot.jsx';
import GlobalContext from '../../../contexts/global-context/global-context.js';

// NPM
import { useContext } from 'react';

const ArenaBattleground = () => {
  const { bots, inGame, testBots } = useContext(GlobalContext);
  const TILES = [...Array(8)]; // Default dimension

  return (
    <div className="flex w-full justify-center">
      <div className="rounded-xl border-2 border-dashed border-white p-2">
        <div className="relative w-8x8 bg-[#270000]">
          {/* Bots */}
          {testBots?.map((bot) => (
            <Bot key={bot.id} {...bot} inGame={inGame} />
          ))}

          {/* Tiles */}
          {TILES.map((_, i) => (
            <div className="group flex" key={i}>
              {TILES.map((_, i) => (
                <div
                  className="h-14 w-14 border-b-[2px] border-r-[2px] border-dashed border-primary-200/50 last-of-type:border-r-0 group-last-of-type:border-b-0"
                  key={i}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArenaBattleground;
