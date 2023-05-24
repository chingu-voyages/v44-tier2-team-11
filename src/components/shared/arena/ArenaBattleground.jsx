import Bot from './ArenaBot.jsx';
import { tiles } from '../../../data.js';
import GlobalContext from '../../../contexts/global-context/global-context.js';

// NPM
import { useContext } from 'react';

const ArenaBattleground = () => {
  const { bots, inGame } = useContext(GlobalContext);

  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-8x8 flex-wrap bg-primary-100">
        {bots?.map((bot) => (
          <Bot key={bot.id} {...bot} inGame={inGame} />
        ))}

        {tiles.map((tile) => (
          <div
            className="h-14 w-14 border-2 border-dashed border-amber-300 text-gray-50"
            key={tile.id}
          >
            {tile.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArenaBattleground;
