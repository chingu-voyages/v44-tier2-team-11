import BotFormsColorScheme from './BotFormsColorScheme.jsx';
import BotFormsName from './BotFormsName.jsx';
import BotFormsBooleanValue from './BotFormsBooleanValue.jsx';
import BotFormsDirection from './BotFormsDirection.jsx';
import BotFormsErrorAlert from './BotFormsErrorAlert.jsx';
import BotFormsSuccessAlert from './BotFormsSuccessAlert.jsx';
import BotDynamic from '../../../bots/BotDynamic.jsx';
import ArrowLeftIcon from '../../../icons/ArrowLeftIcon.jsx';

// Context
import GlobalContext from '../../../../../contexts/global-context.js';

// NPM
import { useState, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const BotForms = ({ onClickGoBackToMain, selectedBotName }) => {
  const DEFAULT_COLOR_SCHEMES = {
    avatarBg: '#E7EFF3',
    avatarBorder: '#A9C6D5',
    baseColor: '#A9C6D5',
    strokeColor: '#4B7F9B',
  };
  const avatarRef = useRef(null);
  const [botAvatarBg, setBotAvatarBg] = useState(
    DEFAULT_COLOR_SCHEMES.avatarBg
  );
  const [botAvatarBorder, setBotAvatarBorder] = useState(
    DEFAULT_COLOR_SCHEMES.avatarBorder
  );
  const [baseColor, setBaseColor] = useState(DEFAULT_COLOR_SCHEMES.baseColor);
  const [strokeColor, setStrokeColor] = useState(
    DEFAULT_COLOR_SCHEMES.strokeColor
  );
  const [botName, setBotName] = useState('');
  const [botBooleanValue, setBotBooleanValue] = useState('');
  const [botDirection, setBotDirection] = useState('');
  const [error, setError] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { bots } = useContext(GlobalContext);

  const resetForm = () => {
    setBotAvatarBg(DEFAULT_COLOR_SCHEMES.avatarBg);
    setBotAvatarBorder(DEFAULT_COLOR_SCHEMES.avatarBorder);
    setBaseColor(DEFAULT_COLOR_SCHEMES.baseColor);
    setStrokeColor(DEFAULT_COLOR_SCHEMES.strokeColor);
    setBotName('');
    setBotBooleanValue('');
    setBotDirection('');
    setError('');
  };

  const goBackToMainForm = () => {
    resetForm();
    setShowSuccessAlert(false);
    onClickGoBackToMain();
  };

  // Resets the form fields
  const onClickResetForm = () => {
    resetForm();
    setShowSuccessAlert(false);
  };

  // Handles the validation & saving the bot info to global context
  const onClickSaveRobot = () => {
    const NO_COLOR_SCHEMES =
      botAvatarBorder === DEFAULT_COLOR_SCHEMES.avatarBg ||
      botAvatarBg === DEFAULT_COLOR_SCHEMES.avatarBorder ||
      baseColor === DEFAULT_COLOR_SCHEMES.baseColor ||
      strokeColor === DEFAULT_COLOR_SCHEMES.strokeColor;
    const NAME_ALREADY_EXIST =
      bots.filter((obj) => obj.name === botName).length !== 0;
    const NAME_IS_EMPTY = botName === '';
    const BOOLEAN_VALUE_EMPTY = botBooleanValue === '';
    const BOT_DIRECTION_EMPTY = botDirection === '';

    // Reset alerts
    setShowSuccessAlert(false);
    setError('');

    const createError = (text) => {
      setError(text);
    };

    if (NO_COLOR_SCHEMES) {
      createError('Please select a color scheme.');
      return;
    }

    if (NAME_IS_EMPTY) {
      createError('Please choose a bot name.');
      return;
    }

    if (NAME_ALREADY_EXIST) {
      createError('Name already exists. Please choose another one.');
      return;
    }

    if (BOOLEAN_VALUE_EMPTY) {
      createError('Please choose a boolean value.');
      return;
    }

    if (BOT_DIRECTION_EMPTY) {
      createError('Please choose the initial direction of bot.');
      return;
    }

    // Throw success error
    setShowSuccessAlert(true);

    // Reset the form
    resetForm();

    // Save the info to global context
    const BOT_INFO = {
      colorSchemes: {
        avatarBorder: botAvatarBorder,
        avatarBg: botAvatarBg,
        baseColor: baseColor,
        strokeColor: strokeColor,
      },
      name: botName,
      booleanValue: botBooleanValue,
      direction: botDirection,
    };

    bots.push(BOT_INFO);
  };

  useEffect(() => {
    // Change avatar background everytime the color scheme changes
    if (avatarRef.current) {
      Object.assign(avatarRef.current.style, {
        borderColor: botAvatarBorder,
        backgroundColor: botAvatarBg,
      });
    }
  }, [baseColor, botAvatarBorder, botAvatarBg]);

  useEffect(() => {
    if (selectedBotName !== '') {
      const BOT_INFO = bots.filter((obj) => obj.name === selectedBotName)[0];

      setBotAvatarBorder(BOT_INFO.colorSchemes.avatarBorder);
      setBotAvatarBg(BOT_INFO.colorSchemes.avatarBg);
      setBaseColor(BOT_INFO.colorSchemes.baseColor);
      setStrokeColor(BOT_INFO.colorSchemes.strokeColor);
      setBotName(BOT_INFO.name);
      setBotBooleanValue(BOT_INFO.booleanValue);
      setBotDirection(BOT_INFO.direction);
    }
  }, [selectedBotName, bots]);

  return (
    <>
      {/* Go Back Button */}
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

      {/* Alert */}
      <BotFormsErrorAlert alertText={error} />
      <BotFormsSuccessAlert canShow={showSuccessAlert} />

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
          <BotFormsColorScheme
            setBotAvatarBg={setBotAvatarBg}
            setBotAvatarBorder={setBotAvatarBorder}
            setBaseColor={setBaseColor}
            setStrokeColor={setStrokeColor}
          />
        </div>

        {/* Bot Name */}
        <div className="mb-4 max-w-sm">
          <BotFormsName botName={botName} setBotName={setBotName} />
        </div>

        {/* Bot Boolean Value */}
        <div className="mb-4 mr-10">
          <BotFormsBooleanValue
            botBooleanValue={botBooleanValue}
            setBotBooleanValue={setBotBooleanValue}
          />
        </div>

        {/* Bot Direction */}
        <div className="max-w-sm">
          <BotFormsDirection
            botDirection={botDirection}
            setBotDirection={setBotDirection}
          />
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="mr-2 rounded-lg bg-primary-100 px-4 py-3 text-sm font-black text-primary-500 outline-none transition-shadow duration-100 ease-linear hover:bg-primary-200/60 focus:bg-primary-200/60 focus:ring-4 focus:ring-primary-300"
            onClick={onClickResetForm}
          >
            Reset
          </button>
          <button
            type="button"
            className="rounded-lg bg-primary-500 px-4 py-3 text-sm font-black text-white outline-none transition-shadow duration-100 ease-linear hover:bg-primary-600/80 focus:bg-primary-600/80 focus:ring-4 focus:ring-primary-300"
            onClick={onClickSaveRobot}
          >
            Create Bot
          </button>
        </div>
      </form>
    </>
  );
};

BotForms.propTypes = {
  onClickGoBackToMain: PropTypes.func.isRequired,
  selectedBotName: PropTypes.string.isRequired,
};

export default BotForms;
