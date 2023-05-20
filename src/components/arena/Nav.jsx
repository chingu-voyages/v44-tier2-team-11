import LogoIcon from '../icons/LogoIcon';
import TrophyStar from '../icons/TrophyStar';
import WrenchIcon from '../icons/WrenchIcon';

const Nav = () => {
  return(
    <>
      <div className="flex items-center justify-between pt-4 px-4">
        <div className='flex items-center'>
          <LogoIcon size={60} />
          <div className='text-2xl font-bold text-270000 ml-4'>Boole Bot</div>
        </div>
        <div className='flex flex-row'>
          <button className="flex items-center justify-center h-14 w-14 rounded-full bg-red-500 text-white mr-4">
            <TrophyStar size={8}/>
          </button>
          <button className="flex items-center justify-center h-14 w-14 rounded-full bg-red-500 text-white">
            <WrenchIcon size={8}/>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button className="relative h-16 w-72 rounded-full bg-red-500 font-bold text-white shadow-lg my-10 text-2xl">START!</button>
      </div>
    </>
  );
};

export default Nav;
