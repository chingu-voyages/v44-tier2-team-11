import BotFormsColorScheme from './BotFormsColorScheme.jsx';
import BotFormsName from './BotFormsName.jsx';
import BotFormsBooleanValue from './BotFormsBooleanValue.jsx';
import BotFormsDirection from './BotFormsDirection.jsx';
import BotFormsErrorAlert from './BotFormsErrorAlert.jsx';
import BotFormsSuccessfullyCreatedAlert from './BotFormsSuccessfullyCreatedAlert.jsx';
import BotFormsSuccessfullyUpdatedAlert from './BotFormsSuccessfullyUpdatedAlert.jsx';
import FilledButton from '../../../../base/FilledButton.jsx';
import FadedButton from '../../../../base/FadedButton.jsx';
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
  const [showSuccessfullyCreatedAlert, setShowSuccessfullyCreatedAlert] =
    useState(false);
  const [showSuccessfullyUpdatedAlert, setShowSuccessfullyUpdatedAlert] =
    useState(false);
  const [isEditingFromContext, setIsEditingFromContext] = useState(false);
  const { bots } = useContext(GlobalContext);

  // Use bot info instead of using default values
  // because user is editing a particular bot
  const getBotInfoFromContext = () => {
    const BOT_INFO = bots.filter((obj) => obj.name === selectedBotName)[0];
    setBotAvatarBorder(BOT_INFO.colorSchemes.avatarBorder);
    setBotAvatarBg(BOT_INFO.colorSchemes.avatarBg);
    setBaseColor(BOT_INFO.colorSchemes.baseColor);
    setStrokeColor(BOT_INFO.colorSchemes.strokeColor);
    setBotName(BOT_INFO.name);
    setBotBooleanValue(BOT_INFO.booleanValue);
    setBotDirection(BOT_INFO.direction);
  };

  //
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

  //
  const goBackToMainForm = () => {
    resetForm();
    setShowSuccessfullyCreatedAlert(false);
    setIsEditingFromContext(false);
    setShowSuccessfullyUpdatedAlert(false);
    onClickGoBackToMain();
  };

  // Resets the form fields and alert components
  const onClickResetForm = () => {
    setShowSuccessfullyCreatedAlert(false);
    setShowSuccessfullyUpdatedAlert(false);

    // Reset form based on bot default values
    if (isEditingFromContext) {
      getBotInfoFromContext();
      return;
    }

    // Reset from with empty values
    resetForm();
  };

  // Handles the validation & saving the bot info to global context
  const onClickUpdateRobot = () => {
    const NO_COLOR_SCHEMES =
      botAvatarBorder === DEFAULT_COLOR_SCHEMES.avatarBg ||
      botAvatarBg === DEFAULT_COLOR_SCHEMES.avatarBorder ||
      baseColor === DEFAULT_COLOR_SCHEMES.baseColor ||
      strokeColor === DEFAULT_COLOR_SCHEMES.strokeColor;
    const NAME_IS_EMPTY = botName === '';
    const BOOLEAN_VALUE_EMPTY = botBooleanValue === '';
    const BOT_DIRECTION_EMPTY = botDirection === '';

    // Reset alerts
    setShowSuccessfullyCreatedAlert(false);
    setShowSuccessfullyUpdatedAlert(false);
    setError('');

    if (NO_COLOR_SCHEMES) {
      setError('Please select a color scheme.');
      return;
    }

    if (NAME_IS_EMPTY) {
      setError('Please choose a bot name.');
      return;
    }

    // If user has already created a bot, make sure that name is unique
    if (bots.length !== 0) {
      const BOT = bots.filter((obj) => obj.name === botName);
      const NAME_SAME_WITH_OTHER_BOTS =
        isEditingFromContext &&
        BOT.length !== 0 &&
        BOT[0].name !== selectedBotName;

      if (NAME_SAME_WITH_OTHER_BOTS) {
        setError('Name already exists. Please choose another one.');
        return;
      }

      if (!isEditingFromContext && BOT.length !== 0) {
        setError('Name already exists. Please choose another one.');
        return;
      }
    }

    if (BOOLEAN_VALUE_EMPTY) {
      setError('Please choose a boolean value.');
      return;
    }

    if (BOT_DIRECTION_EMPTY) {
      setError('Please choose the initial direction of bot.');
      return;
    }

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

    // If user is updates info of a particular bot
    if (isEditingFromContext) {
      setShowSuccessfullyUpdatedAlert(true);
      const IND = bots.findIndex((botObj) => botObj.name === selectedBotName);
      bots[IND] = Object.assign({}, BOT_INFO);
      return;
    }

    // Reset the form
    resetForm();

    // Throw success alert
    setShowSuccessfullyCreatedAlert(true);

    // Save the info to global context
    bots.push(BOT_INFO);
  };

  // Change avatar background everytime the color scheme changes
  useEffect(() => {
    if (avatarRef.current) {
      Object.assign(avatarRef.current.style, {
        borderColor: botAvatarBorder,
        backgroundColor: botAvatarBg,
      });
    }
  }, [baseColor, botAvatarBorder, botAvatarBg]);

  // Everytime user selects an existing bot to edit its information
  useEffect(() => {
    if (selectedBotName !== '') {
      getBotInfoFromContext();
      setIsEditingFromContext(true);
    }
  }, [selectedBotName]);

  return (
    <>
      {/* Go Back Button */}
      <FadedButton className="flex" onClick={goBackToMainForm}>
        <span className="mr-1 flex w-3">
          <ArrowLeftIcon className="block h-full w-full fill-primary-500" />
        </span>
        <span className="text-sm font-bold text-primary-500">Go back</span>
      </FadedButton>

      {/* Alert */}
      <BotFormsErrorAlert alertText={error} />
      <BotFormsSuccessfullyCreatedAlert
        canShow={showSuccessfullyCreatedAlert}
      />
      <BotFormsSuccessfullyUpdatedAlert
        canShow={showSuccessfullyUpdatedAlert}
      />

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
          <FadedButton onClick={onClickResetForm}>Reset</FadedButton>
          <FilledButton onClick={onClickUpdateRobot}>
            {isEditingFromContext ? 'Update Bot' : 'Create Bot'}
          </FilledButton>
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
