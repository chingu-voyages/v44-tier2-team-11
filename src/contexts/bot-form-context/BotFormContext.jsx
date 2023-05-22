import BotFormContext from './bot-form-context.js';
import GlobalContext from '../global-context/global-context.js';
import PropTypes from 'prop-types';

// NPM
import { useState } from 'react';
import { useContext } from 'react';

const Context = ({ children }) => {
  const { bots } = useContext(GlobalContext);
  const defaultBotColorSchemes = {
    background: '#E7EFF3',
    border: '#A9C6D5',
    base: '#A9C6D5',
    stroke: '#4B7F9B',
  };

  const [botColorSchemes, setBotColorSchemes] = useState({
    ...defaultBotColorSchemes,
  });
  const [botName, setBotName] = useState('');
  const [botBooleanValue, setBotBooleanValue] = useState('');
  const [botDirection, setBotDirection] = useState('');
  const [failedAlertText, setFailedAlertText] = useState('');
  const [canShowSuccessfullyCreatedAlert, setCanShowSuccessfullyCreatedAlert] =
    useState(false);

  const onClickResetForm = () => {
    setBotColorSchemes(defaultBotColorSchemes);
    setBotName('');
    setBotBooleanValue('');
    setBotDirection('');
    setFailedAlertText('');
    setCanShowSuccessfullyCreatedAlert(false);
  };

  const onClickCreateBot = () => {
    const NO_COLOR_SCHEMES =
      botColorSchemes.border === defaultBotColorSchemes.border ||
      botColorSchemes.background === defaultBotColorSchemes.background ||
      botColorSchemes.base === defaultBotColorSchemes.base ||
      botColorSchemes.stroke === defaultBotColorSchemes.stroke;
    const NAME_IS_EMPTY = botName === '';
    const BOOLEAN_VALUE_EMPTY = botBooleanValue === '';
    const BOT_DIRECTION_EMPTY = botDirection === '';

    // Reset alerts
    setFailedAlertText('');

    if (NO_COLOR_SCHEMES) {
      setFailedAlertText('Please select a color scheme.');
      return;
    }

    if (NAME_IS_EMPTY) {
      setFailedAlertText('Please choose a bot name.');
      return;
    }

    // If user has already created a bot, make sure that name is unique
    if (bots.length !== 0) {
      const BOT = bots.filter((obj) => obj.name === botName);
      if (BOT.length !== 0) {
        setFailedAlertText('Name already exists. Please choose another one.');
        return;
      }
    }

    if (BOOLEAN_VALUE_EMPTY) {
      setFailedAlertText('Please choose a boolean value.');
      return;
    }

    if (BOT_DIRECTION_EMPTY) {
      setFailedAlertText('Please choose the initial direction of bot.');
      return;
    }

    const BOT_INFO = {
      colorSchemes: {
        background: botColorSchemes.background,
        border: botColorSchemes.border,
        base: botColorSchemes.base,
        stroke: botColorSchemes.stroke,
      },
      name: botName,
      booleanValue: botBooleanValue,
      direction: botDirection,
    };

    // Reset the form
    onClickResetForm();

    // Throw success alert
    setCanShowSuccessfullyCreatedAlert(true);

    // Save the info to global context
    bots.push(BOT_INFO);
  };

  return (
    <BotFormContext.Provider
      value={{
        defaultBotColorSchemes,
        botColorSchemes,
        setBotColorSchemes,
        botName,
        setBotName,
        botBooleanValue,
        setBotBooleanValue,
        botDirection,
        setBotDirection,
        failedAlertText,
        setFailedAlertText,
        canShowSuccessfullyCreatedAlert,
        setCanShowSuccessfullyCreatedAlert,
        onClickResetForm,
        onClickCreateBot,
      }}
    >
      {children}
    </BotFormContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Context;
