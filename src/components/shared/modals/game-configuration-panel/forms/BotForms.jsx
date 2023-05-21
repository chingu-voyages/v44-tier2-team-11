import BotColorScheme from './BotColorScheme.jsx';
import BotName from './BotName.jsx';
import BotBooleanValue from './BotBooleanValue.jsx';
import BotDirection from './BotDirection.jsx';
import BotDynamic from '../../../bots/BotDynamic.jsx';
import ArrowLeftIcon from '../../../icons/ArrowLeftIcon.jsx';

// Context
import GlobalContext from '../../../../../contexts/global-context.js';

// NPM
import { useState, useContext, useEffect, useRef } from 'react';

const BotForms = ({ onClickGoBackToMain }) => {
  const avatarRef = useRef(null);
  const [botAvatarBg, setBotAvatarBg] = useState('#E7EFF3');
  const [botAvatarBorder, setBotAvatarBorder] = useState('#A9C6D5');
  const [baseColor, setBaseColor] = useState('#A9C6D5');
  const [strokeColor, setStrokeColor] = useState('#4B7F9B');
  const [botName, setBotName] = useState('');
  const [botBooleanValue, setBotBooleanValue] = useState('');
  const [botDirection, setBotDirection] = useState('');
  const { bots } = useContext(GlobalContext);

  const goBackToMainForm = () => {
    onClickGoBackToMain();
  };
  const resetForm = () => {
    setBotName('');
    setBotBooleanValue('');
    setBotDirection('');
  };

  const onClickSaveRobot = () => {
    // Save to global context
    bots.push({
      colorSchemes: {
        avatarBorder: botAvatarBorder,
        avatarBg: botAvatarBg,
        baseColor: baseColor,
        strokeColor: strokeColor,
      },
      name: botName,
      booleanValue: botBooleanValue,
      direction: botDirection,
    });
  };

  useEffect(() => {
    if (avatarRef) {
      Object.assign(avatarRef.current.style, {
        borderColor: botAvatarBorder,
        backgroundColor: botAvatarBg,
      });
    }
  }, [baseColor]);

  return (
    <>
      <button
        type="button"
        className="mb-8 flex rounded bg-primary-100 p-2 outline-none transition-shadow duration-100 ease-linear hover:bg-primary-200/70 focus:bg-primary-200/70 focus:ring-4 focus:ring-primary-300"
        onClick={goBackToMainForm}
      >
        <span className="mr-1 flex w-3">
          <ArrowLeftIcon className="block h-full w-full fill-primary-500" />
        </span>
        <span className="text-sm font-bold text-primary-500">Go back</span>
      </button>
      <form className="flex flex-col">
        {/* Avatar */}
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

        {/* Color Scheme */}
        <div className="mb-4">
          <BotColorScheme
            setBotAvatarBg={setBotAvatarBg}
            setBotAvatarBorder={setBotAvatarBorder}
            setBaseColor={setBaseColor}
            setStrokeColor={setStrokeColor}
          />
        </div>

        {/* Bot Name */}
        <div className="mb-4 max-w-sm">
          <BotName botName={botName} setBotName={setBotName} />
        </div>

        {/* Bot Boolean Value */}
        <div className="mb-4 mr-10">
          <BotBooleanValue
            botBooleanValue={botBooleanValue}
            setBotBooleanValue={setBotBooleanValue}
          />
        </div>

        {/* Bot Direction */}
        <div className="max-w-sm">
          <BotDirection
            botDirection={botDirection}
            setBotDirection={setBotDirection}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="mr-2 rounded-lg bg-primary-100 px-4 py-3 text-sm font-black text-primary-500 outline-none transition-shadow duration-100 ease-in hover:bg-primary-200/60 focus:bg-primary-200/60 focus:ring-4 focus:ring-primary-300"
            onClick={resetForm}
          >
            Reset
          </button>
          <button
            type="button"
            className="rounded-lg bg-primary-500 px-4 py-3 text-sm font-black text-white outline-none transition-shadow duration-100 ease-in hover:bg-primary-600/80 focus:bg-primary-600/80 focus:ring-4 focus:ring-primary-300"
            onClick={onClickSaveRobot}
          >
            Create Bot
          </button>
        </div>
      </form>
    </>
  );
};

export default BotForms;
