import FilledButtonIcons from '../../base/FilledButtonIcons.jsx';
import LogoIcon from '../icons/LogoIcon.jsx';
import TrophyStarIcon from '../icons/TrophyStarIcon.jsx';
import WrenchIcon from '../icons/WrenchIcon.jsx';

// Context
import GlobalContext from '../../../contexts/global-context/global-context.js';

// NPM
import { useContext } from 'react';

const ArenaNavigationBar = () => {
  const { setShowConfigurationPanel } = useContext(GlobalContext);

  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <div className="flex items-center">
        <span className="flex w-9">
          <LogoIcon />
        </span>
        <div className="ml-2 text-xl font-black text-primary-900">
          Boole Bot
        </div>
      </div>
      <div className="flex">
        <FilledButtonIcons>
          <TrophyStarIcon />
        </FilledButtonIcons>
        <FilledButtonIcons onClick={() => setShowConfigurationPanel(true)}>
          <WrenchIcon />
        </FilledButtonIcons>
      </div>
    </div>
  );
};

export default ArenaNavigationBar;
