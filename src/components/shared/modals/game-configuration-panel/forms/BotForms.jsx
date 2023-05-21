import BotColorScheme from './BotColorScheme.jsx';
import BotName from './BotName.jsx';
import BotBooleanValue from './BotBooleanValue.jsx';
import BotDirection from './BotDirection.jsx';
import BotDynamic from '../../../bots/BotDynamic.jsx';

// NPM
import { useState, useEffect, useRef } from 'react';

const BotForms = () => {
  const avatarRef = useRef(null);
  const [botAvatarBg, setBotAvatarBg] = useState('#E7EFF3');
  const [botAvatarBorder, setBotAvatarBorder] = useState('#A9C6D5');
  const [baseColor, setBaseColor] = useState('#A9C6D5');
  const [strokeColor, setStrokeColor] = useState('#4B7F9B');

  useEffect(() => {
    if (avatarRef) {
      Object.assign(avatarRef.current.style, {
        borderColor: botAvatarBorder,
        backgroundColor: botAvatarBg,
      });
    }
  }, [baseColor]);

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex justify-center">
        <span
          ref={avatarRef}
          className={`h-[80px] w-[100px] rounded-lg border-[3px] p-2`}
        >
          <BotDynamic
            baseColor={baseColor}
            strokeColor={strokeColor}
            className={'block h-full w-full'}
          />
        </span>
      </div>
      <div className="mb-4">
        <BotColorScheme
          setBotAvatarBg={setBotAvatarBg}
          setBotAvatarBorder={setBotAvatarBorder}
          setBaseColor={setBaseColor}
          setStrokeColor={setStrokeColor}
        />
      </div>
      <div className="mb-4 max-w-sm">
        <BotName />
      </div>
      <div className="mb-4 mr-10">
        <BotBooleanValue />
      </div>
      <div className="max-w-sm">
        <BotDirection />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="mr-2 rounded-lg bg-primary-100 px-4 py-3 text-sm font-black text-primary-500 outline-none transition-shadow duration-100 ease-in hover:bg-primary-200/60 focus:bg-primary-200/60 focus:ring-4 focus:ring-primary-300 "
        >
          Reset
        </button>
        <button
          type="button"
          className="rounded-lg bg-primary-500 px-4 py-3 text-sm font-black text-white outline-none transition-shadow duration-100 ease-in hover:bg-primary-600/80 focus:bg-primary-600/80 focus:ring-4 focus:ring-primary-300"
        >
          Create Bot
        </button>
      </div>
    </div>
  );
};

export default BotForms;
