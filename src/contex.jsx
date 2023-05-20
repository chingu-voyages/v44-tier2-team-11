import { createContext, useState, useContext, useRef } from 'react';
import { bots } from './data';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [botList, setBotList] = useState(bots);
  const inGamePositions = useRef([]);
  return (
    <GlobalContext.Provider value={{ botList, setBotList, inGamePositions }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
