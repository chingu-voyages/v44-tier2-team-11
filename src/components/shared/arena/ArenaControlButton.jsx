import GlobalContext from "../../../contexts/global-context.js";

// NPM
import {useContext} from "react";

const ArenaControlButton = () => {
    const { setInGame, inGame } = useContext(GlobalContext);
    return (
        <div className="flex w-full justify-center">
            <button
                onClick={() => setInGame(!inGame)}
                className="shadow-[inset_0_-6px_0_0_rgba(0,0,0,0.16)] focus:shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.16)] focus:translate-y-1 transition-all duration-100 ease-in relative my-10 py-4 w-full max-w-[220px] outline-none rounded-full bg-primary-500 text-base font-black text-white hover:bg-primary-600/75 focus:bg-primary-600/75"
            >
                {inGame ? 'PAUSE' : 'START!'}
            </button>
        </div>
    )
}

export default ArenaControlButton;
