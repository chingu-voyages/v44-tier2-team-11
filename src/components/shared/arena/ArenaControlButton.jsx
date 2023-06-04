import GlobalContext from '../../../contexts/global-context/global-context.js';

// NPM
import { useContext } from 'react';

const ArenaControlButton = () => {
  const { bots, setInGame, inGame } = useContext(GlobalContext);

  const onClickToggleBattle = (e) => {
    e.currentTarget.blur(); // For bouncy effect
    setInGame(!inGame);
  };
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={onClickToggleBattle}
        disabled={bots.length < 2}
        className="relative my-10 w-full max-w-[220px] rounded-full bg-primary-500 py-4 text-base font-black text-white shadow-[inset_0_-6px_0_0_rgba(0,0,0,0.16)] outline-none transition-all duration-100 ease-in hover:bg-primary-600/75 focus:translate-y-1 focus:bg-primary-600/75 focus:shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.16)] disabled:cursor-not-allowed"
      >
        {inGame ? 'Stop!' : 'Battle!'}
      </button>
    </div>
  );
};

export default ArenaControlButton;
