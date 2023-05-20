import { useState } from 'react';
import Arena from './components/arena/Arena';
import GameConfiguration from './components/GameConfigurationPanel';

function App() {
  let [isGameConfigurationShown, setIsGameConfigurationShown] = useState(false);

  const onClickCloseModal = () => {
    setIsGameConfigurationShown(!isGameConfigurationShown);
  };

  return (
    <>
      <button onClick={onClickCloseModal}>Show game configuration</button>
      <GameConfiguration
        onClickCloseModal={onClickCloseModal}
        shouldShow={isGameConfigurationShown}
      />
      <Arena />
    </>
  );
}

export default App;
