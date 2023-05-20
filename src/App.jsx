import 'tailwindcss/tailwind.css';
import Arena from './components/arena/Arena';
import Leaderboard from './components/leaderboard/Leaderboard';
import Nav from './components/arena/Nav';
import GameConfigurationPanel from './components/GameConfigurationPanel';

// NPM
import { useState } from 'react';

function App() {
  let [isGameConfigurationShown, setIsGameConfigurationShown] = useState(false);

  const onClickCloseModal = () => {
    setIsGameConfigurationShown(!isGameConfigurationShown);
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-3/4 rounded bg-gradient-to-b from-red-100 to-red-300 p-4">
          <Nav />
          <Arena />
          <Leaderboard />
          <button onClick={onClickCloseModal}>Show game configuration</button>
          <GameConfigurationPanel
            onClickCloseModal={onClickCloseModal}
            shouldShow={isGameConfigurationShown}
          />
        </div>
      </div>
    </>
  );
}

export default App;
