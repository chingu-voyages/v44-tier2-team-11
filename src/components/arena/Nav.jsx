import { useGlobalContext } from '../../contex';
import LogoIcon from '../icons/LogoIcon';
import TrophyStar from '../icons/TrophyStarIcon';
import WrenchIcon from '../icons/WrenchIcon';

const Nav = () => {
  const { setInGame, inGame } = useGlobalContext();
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center">
          <span className="flex w-9">
            <LogoIcon />
          </span>
          <div className="ml-2 text-xl font-black text-primary-900">
            Boole Bot
          </div>
        </div>
        <div className="flex flex-row">
          <button className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white">
            <TrophyStar size={8} />
          </button>
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white">
            <WrenchIcon size={8} />
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={() => setInGame(!inGame)}
          className="relative my-10 h-16 w-72 rounded-full bg-red-500 text-2xl font-bold text-white shadow-lg"
        >
          {inGame ? 'PAUSE' : 'START!'}
        </button>
      </div>
    </>
  );
};

export default Nav;
