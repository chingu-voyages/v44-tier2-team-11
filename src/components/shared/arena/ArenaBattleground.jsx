import Bot from './ArenaBot.jsx';
import GlobalContext from '../../../contexts/global-context/global-context.js';

// NPM
import { useContext } from 'react';

const ArenaBattleground = () => {
  const { bots, inGame, testBots, arenaCell } = useContext(GlobalContext);
  const TILES = [...Array(8)]; // Default dimension

  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[468px] rounded-xl border-2 border-dashed border-white p-2">
        <div className="relative w-full bg-[#270000]">
          {/* Bots */}
          {bots?.map((bot) => (
            <Bot key={bot.id} {...bot} inGame={inGame} />
          ))}

          {/* Tiles */}
          {TILES.map((_, i) => (
            <div className="group flex" key={i}>
              {TILES.map((_, i) => (
                <div
                  ref={arenaCell}
                  className="aspect-square w-14 border-b-[2px] border-r-[2px] border-dashed border-primary-200/50 last-of-type:border-r-0 group-last-of-type:border-b-0"
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
