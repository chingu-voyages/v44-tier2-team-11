import GlobalContext from "./contexts/global-context.js";
import {bots} from './data';

// NPM
import {useState, useRef} from 'react';
import PropTypes from "prop-types";

const AppContext = ({children}) => {
    const [showConfigurationPanel, setShowConfigurationPanel] = useState();
    const [botList, setBotList] = useState(bots);
    const [inGame, setInGame] = useState(false);
    const inGamePositions = useRef([]);

    return (
        <GlobalContext.Provider
            value={{
                showConfigurationPanel,
                setShowConfigurationPanel,
                botList,
                setBotList,
                inGamePositions,
                inGame,
                setInGame
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

AppContext.propTypes = {
    children: PropTypes.object.isRequired
}

export default AppContext;
