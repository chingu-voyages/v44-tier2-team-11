import LogoIcon from '../icons/LogoIcon';
import TrophyStar from '../icons/TrophyStarIcon';
import WrenchIcon from '../icons/WrenchIcon';

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center">
          <LogoIcon size={60} />
          <div className="text-270000 ml-4 text-2xl font-bold">Boole Bot</div>
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
        <button className="relative my-10 h-16 w-72 rounded-full bg-red-500 text-2xl font-bold text-white shadow-lg">
          START!
        </button>
      </div>
    </>
  );
};

export default Nav;
