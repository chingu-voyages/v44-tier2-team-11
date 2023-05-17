import LogoIcon from './icons/LogoIcon';
import TrophyStar from './icons/TrophyStar';
import WrenchIcon from './icons/WrenchIcon';
import CircleButton from './CircleButton';

const Nav = () => {
  <>
    <LogoIcon />
    <div>
      <CircleButton icon={TrophyStar}/>
      <CircleButton icon={WrenchIcon}/>
    </div>
  </>
};

export default Nav;
