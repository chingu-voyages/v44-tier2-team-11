import 'tailwindcss/tailwind.css';
import Arena from "./components/shared/arena/Arena.jsx";
import Leaderboard from './components/shared/leaderboard/Leaderboard';
import GameConfigurationPanel from './components/shared/Modals/GameConfigurationPanel.jsx';

// NPM
import { useState } from 'react';

function App() {
  let [isGameConfigurationShown, setIsGameConfigurationShown] = useState(false);

  const onClickCloseModal = () => {
    setIsGameConfigurationShown(!isGameConfigurationShown);
  };

  return (
    <div className="w-full bg-gradient-to-b from-red-100 to-red-300 p-4">
      <Arena />
      {/*<Leaderboard />*/}
      <GameConfigurationPanel
        onClickCloseModal={onClickCloseModal}
        shouldShow={isGameConfigurationShown}
      />
    </div>
  );
}

export default App;
