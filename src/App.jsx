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
          <Arena />
        </div>
      </div>
    <Leaderboard />
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
