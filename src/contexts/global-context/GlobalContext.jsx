import GlobalContext from './global-context.js';
import { BotData, botList } from '../../data.js';

// NPM
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Context = ({ children }) => {
  // Toggle configuration panel modal
  const [showConfigurationPanel, setShowConfigurationPanel] = useState();

  // toggle leaderborad
  const [showLeaderboard, setShowLeaderboard] = useState();

  // An array that contains all bots created by user
  const [bots, setBots] = useState([]);

  // An object that contains all configuration of the game
  const [configuration, setConfiguration] = useState({
    operation: 'AND',
    speed: 1000,
  });

  const testBots = botList || [];
  const botScores = useRef([]);
  const [inGame, setInGame] = useState(false);
  const inGamePositions = useRef([]);
  const gameOver = () => {
    setInGame(false);
    setShowLeaderboard(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        gameOver,
        showConfigurationPanel,
        setShowConfigurationPanel,
        showLeaderboard,
        setShowLeaderboard,
        bots,
        setBots,
        configuration,
        setConfiguration,
        inGamePositions,
        inGame,
        testBots,
        setInGame,
        botScores,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Context;
