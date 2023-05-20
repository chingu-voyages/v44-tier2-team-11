import 'tailwindcss/tailwind.css';
import LogoIcon from './components/icons/LogoIcon';
import TrophyStar from './components/icons/TrophyStar';
import WrenchIcon from './components/icons/WrenchIcon';

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
      <div className="w-3/4 rounded bg-gradient-to-b from-red-100 to-red-300 p-4">
        <div className="flex items-center justify-between pt-4 px-4">
          <LogoIcon />
          <div>
            <button className="h-12 w-12 rounded-full bg-red-500 text-white"><TrophyStar /></button>
            <button className="h-12 w-12 rounded-full bg-red-500 text-white"><WrenchIcon/></button>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="relative h-16 w-72 rounded-full bg-red-500 font-bold text-white shadow-lg my-10 text-2xl">START!</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
