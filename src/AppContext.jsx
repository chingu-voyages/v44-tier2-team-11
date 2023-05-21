import GlobalContext from './contexts/global-context.js';
import { bots } from './data';

// NPM
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const AppContext = ({ children }) => {
  // Toggle configuration panel modal
  const [showConfigurationPanel, setShowConfigurationPanel] = useState();

  // An array that contains all bots defined by user
  const [bots, setBots] = useState([]);

  const [botList, setBotList] = useState(bots);
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

AppContext.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppContext;
