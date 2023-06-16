import FilledButtonIcons from '../../base/FilledButtonIcons.jsx';
import LogoIcon from '../icons/LogoIcon.jsx';
import TrophyStarIcon from '../icons/TrophyStarIcon.jsx';
import WrenchIcon from '../icons/WrenchIcon.jsx';

// Context
import GlobalContext from '../../../contexts/global-context/global-context.js';

// NPM
import { useContext } from 'react';

const ArenaNavigationBar = () => {
  const { inGame, bots, setShowConfigurationPanel, setShowLeaderboard } =
    useContext(GlobalContext);
  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex items-center">
        <span className="flex w-9">
          <LogoIcon />
        </span>
        <div className="ml-2 hidden text-xl font-black text-primary-900 min-[300px]:block">
          Boole Bot
        </div>
      </div>
      <div className="flex">
        <FilledButtonIcons
          className="mr-2"
          disabled={inGame && bots.length >= 2}
          onClick={() => setShowLeaderboard(true)}
        >
          <TrophyStarIcon />
        </FilledButtonIcons>
        <FilledButtonIcons
          disabled={inGame && bots.length >= 2}
          onClick={() => setShowConfigurationPanel(true)}
        >
          <WrenchIcon />
        </FilledButtonIcons>
      </div>
    </div>
  );
};

export default ArenaNavigationBar;
