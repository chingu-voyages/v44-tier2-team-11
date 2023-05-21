import { tiles } from '../../data';
import Bot from './Bot';
import GlobalContext from "../../contexts/global-context.js";

// NPM
import {useContext} from "react";

const Arena = () => {
  const { botList, inGame } = useContext(GlobalContext);

  return (
    <>
      <div className="relative flex w-8x8 flex-wrap bg-primary-100">
        {botList.map((bot) => (
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
    </>
  );
};

export default Arena;
