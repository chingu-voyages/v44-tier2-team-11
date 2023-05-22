import GlobalContext from './global-context.js';
import { BotData } from '../../data.js';

// NPM
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Context = ({ children }) => {
  // Toggle configuration panel modal
  const [showConfigurationPanel, setShowConfigurationPanel] = useState();

  // An array that contains all bots created by user
  const [bots, setBots] = useState([]);

  const [botList, setBotList] = useState(BotData);
  const [inGame, setInGame] = useState(false);
  const inGamePositions = useRef([]);

  return (
    <GlobalContext.Provider
      value={{
        showConfigurationPanel,
        setShowConfigurationPanel,
        bots,
        setBots,
        botList,
        setBotList,
        inGamePositions,
        inGame,
        setInGame,
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
