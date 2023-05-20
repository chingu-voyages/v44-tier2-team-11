import 'tailwindcss/tailwind.css';
import Arena from './components/arena/Arena';
import Leaderboard from './components/leaderboard/Leaderboard';
import Nav from './components/arena/Nav';

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-3/4 rounded bg-gradient-to-b from-red-100 to-red-300 p-4">
          <Nav />
          <Arena />
          <Leaderboard />
        </div>
      </div>
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
