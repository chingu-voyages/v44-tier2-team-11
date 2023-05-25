import GlobalContext from './global-context.js';
import { BotData, botList } from '../../data.js';

// NPM
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Context = ({ children }) => {
  // Toggle configuration panel modal
  const [showConfigurationPanel, setShowConfigurationPanel] = useState();

  // An array that contains all bots created by user
  const [bots, setBots] = useState([]);
  const testBots = botList || [];
  // An object that contains all configuration of the game
  const [configuration, setConfiguration] = useState({});
  const botScores = useRef([]);
  const [inGame, setInGame] = useState(false);
  const inGamePositions = useRef([]);

  return (
    <GlobalContext.Provider
      value={{
        showConfigurationPanel,
        setShowConfigurationPanel,
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
