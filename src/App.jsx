import 'tailwindcss/tailwind.css';
import Arena from './components/arena/Arena';
import Leaderboard from './components/leaderboard/Leaderboard';
import ArenaNavigationBar from "./components/shared/ArenaNavigationBar.jsx";
import GameConfigurationPanel from './components/GameConfigurationPanel';

// NPM
import { useState } from 'react';

function App() {
  let [isGameConfigurationShown, setIsGameConfigurationShown] = useState(false);

  const onClickCloseModal = () => {
    setIsGameConfigurationShown(!isGameConfigurationShown);
  };

  return (
    <div className="w-full bg-gradient-to-b from-red-100 to-red-300 p-4">
      <ArenaNavigationBar />
      <Arena />
      {/*<Leaderboard />*/}
      <button onClick={onClickCloseModal}>Show game configuration</button>
      <GameConfigurationPanel
        onClickCloseModal={onClickCloseModal}
        shouldShow={isGameConfigurationShown}
      />
    </div>
  );
}

export default App;
