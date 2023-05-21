import { createContext, useState, useContext, useRef } from 'react';
import { bots } from './data';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [botList, setBotList] = useState(bots);
  const [inGame, setInGame] = useState(false);
  const inGamePositions = useRef([]);
  return (
    <GlobalContext.Provider
      value={{ botList, setBotList, inGamePositions, inGame, setInGame }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
