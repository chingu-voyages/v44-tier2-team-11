import GlobalContext from "../../contexts/global-context.js";
import FilledButtonIcons from "../base/FilledButtonIcons.jsx";
import LogoIcon from '../icons/LogoIcon';
import TrophyStarIcon from '../icons/TrophyStarIcon';
import WrenchIcon from '../icons/WrenchIcon';

// NPM
import {useContext} from "react";

const Nav = () => {
    const { setInGame, inGame } = useContext(GlobalContext);
    return (
        <>
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
                    <FilledButtonIcons>
                        <WrenchIcon />
                    </FilledButtonIcons>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <button
                    onClick={() => setInGame(!inGame)}
                    className="relative my-10 h-16 w-72 rounded-full bg-red-500 text-2xl font-bold text-white shadow-lg"
                >
                    {inGame ? 'PAUSE' : 'START!'}
                </button>
            </div>
        </>
    );
};

export default Nav;
