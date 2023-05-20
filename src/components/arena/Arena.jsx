import { useState } from 'react';
import { tiles } from '../../data';
import Bot from './Bot';
import { useGlobalContext } from '../../contex';

const Arena = () => {
  const [inGame, setInGame] = useState(false);
  const { botList } = useGlobalContext();
  console.log(inGame);
  return (
    <>
      <button
        onClick={() => setInGame(!inGame)}
        className="bold m-20 rounded-full bg-primary-100 p-2"
      >
        Start
      </button>
      <div className="relative flex w-8x8 flex-wrap bg-primary-100">
        {botList.map((bot) => (
          <Bot key={bot.id} {...bot} inGame={inGame} />
        ))}

        {tiles.map((tile) => (
          <div
            className="border-amber-300 text-gray-50 h-14 w-14 border-2 border-dashed"
            key={tile.id}
          >
            {tile.id}
          </div>
        ))}
      </div>
    </>
  );
};

export default Arena;
