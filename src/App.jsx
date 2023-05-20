import 'tailwindcss/tailwind.css';
import LogoIcon from './components/icons/LogoIcon';
import TrophyStar from './components/icons/TrophyStar';
import WrenchIcon from './components/icons/WrenchIcon';
import Arena from './components/arena/Arena';
import Leaderboard from './components/leaderboard/Leaderboard';

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-3/4 rounded bg-gradient-to-b from-red-100 to-red-300 p-4">
          <div className="flex items-center justify-between pt-4 px-4">
            <div className='flex items-center text-white bold text-xl'>
              <LogoIcon className="w-8 h-8"/> Boole Bot
            </div>
            <div>
              <button className="flex items-center justify-center h-14 w-14 rounded-full bg-red-500 text-white items-center justify-center">
                <TrophyStar size={10}/>
              </button>
              <button className="h-14 w-14 rounded-full bg-red-500 text-white"><WrenchIcon/></button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button className="relative h-16 w-72 rounded-full bg-red-500 font-bold text-white shadow-lg my-10 text-2xl">START!</button>
          </div>
        </div>
      </div>
    <Arena />
    </>
  );
}

export default App;

// const App = () => {
//   return (
//     <>
//
//     </>
//   );
// }
// export default App;
