import BotFormContext from './bot-form-context.js';
import GlobalContext from '../global-context/global-context.js';
import GameConfigurationPanelContext from '../game-configuration-panel/game-configuration-panel-context.js';
import PropTypes from 'prop-types';

// NPM
import { useEffect, useState } from 'react';
import { useContext } from 'react';

const Context = ({ children }) => {
  const { bots, setBots } = useContext(GlobalContext);
  const { showConfigurationPanel, selectedBotInfo, setSelectedBotInfo } =
    useContext(GameConfigurationPanelContext);

  const [defaultBotColorSchemes] = useState({
    background: '#E7EFF3',
    border: '#A9C6D5',
    base: '#A9C6D5',
    stroke: '#4B7F9B',
  });

  const [botColorSchemes, setBotColorSchemes] = useState({
    ...defaultBotColorSchemes,
  });
  const [botName, setBotName] = useState('');
  const [botBooleanValue, setBotBooleanValue] = useState('');
  const [botDirection, setBotDirection] = useState('');
  const [failedAlertText, setFailedAlertText] = useState('');
  const [canShowSuccessfullyCreatedAlert, setCanShowSuccessfullyCreatedAlert] =
    useState(false);
  const [canShowSuccessfullyUpdatedAlert, setCanShowSuccessfullyUpdatedAlert] =
    useState(false);
  const [canShowSuccessfullyDeletedAlert, setCanShowSuccessfullyDeletedAlert] =
    useState(false);

  const onClickResetForm = () => {
    setFailedAlertText('');
    setCanShowSuccessfullyDeletedAlert(false);
    setCanShowSuccessfullyCreatedAlert(false);
    setCanShowSuccessfullyUpdatedAlert(false);
    
    if (Object.keys(selectedBotInfo).length !== 0) {
      setBotColorSchemes(selectedBotInfo.colorSchemes);
      setBotName(selectedBotInfo.name);
      setBotBooleanValue(selectedBotInfo.booleanValue);
      setBotDirection(selectedBotInfo.direction);
      return;
    }

    setBotColorSchemes(defaultBotColorSchemes);
    setBotName('');
    setBotBooleanValue('');
    setBotDirection('');
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
    setCanShowSuccessfullyDeletedAlert(false);
    setCanShowSuccessfullyCreatedAlert(false);
    setCanShowSuccessfullyUpdatedAlert(false);
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

      // If user is updating a particular bot
      if (
        Object.keys(selectedBotInfo).length !== 0 &&
        BOT.length !== 0 &&
        BOT[0].name !== selectedBotInfo.name
      ) {
        setFailedAlertText('Name already exists. Please choose another one.');
        return;
      }

      // If user is creating a new bot
      if (Object.keys(selectedBotInfo).length === 0 && BOT.length !== 0) {
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
      id: Date.now(),
      x: Math.floor(Math.random() * 7),
      y: Math.floor(Math.random() * 7),
      name: botName,
      booleanValue: parseFloat(botBooleanValue),
      direction: botDirection,
    };

    // Update the bot with new information
    if (Object.keys(selectedBotInfo).length !== 0) {
      setCanShowSuccessfullyUpdatedAlert(true);
      const IND = bots.findIndex(
        (botObj) => botObj.name === selectedBotInfo.name
      );
      bots[IND] = BOT_INFO;
      setSelectedBotInfo(BOT_INFO);
      return;
    }

    // Reset the form
    onClickResetForm();

    // Throw success alert
    setCanShowSuccessfullyCreatedAlert(true);

    // Save the info to global context
    bots.push(BOT_INFO);
  };

  const onClickDeleteBot = () => {
    const IND = bots.findIndex(
      (botObj) => botObj.name === selectedBotInfo.name
    );
    bots.splice(IND, 1);
    setSelectedBotInfo({});
    onClickResetForm();
    setCanShowSuccessfullyDeletedAlert(true);
  };

  // Initialize form fields based on whether user is updating an existing bot or creating a new one
  useEffect(() => {
    if (Object.keys(selectedBotInfo).length !== 0) {
      setBotColorSchemes(selectedBotInfo.colorSchemes);
      setBotName(selectedBotInfo.name);
      setBotBooleanValue(selectedBotInfo.booleanValue);
      setBotDirection(selectedBotInfo.direction);
      return;
    }

    setBotColorSchemes({ ...defaultBotColorSchemes });
    setBotName('');
    setBotBooleanValue('');
    setBotDirection('');
  }, [selectedBotInfo, defaultBotColorSchemes]);

  // When configuration has been closed, reset the bot form
  useEffect(() => {
    if (!showConfigurationPanel) {
      setCanShowSuccessfullyDeletedAlert(false);
      setCanShowSuccessfullyCreatedAlert(false);
      setCanShowSuccessfullyUpdatedAlert(false);

      setSelectedBotInfo({});

      setBotColorSchemes(defaultBotColorSchemes);
      setBotName('');
      setBotBooleanValue('');
      setBotDirection('');
    }
  }, [showConfigurationPanel, defaultBotColorSchemes, setSelectedBotInfo]);

  return (
    <BotFormContext.Provider
      value={{
        defaultBotColorSchemes,
        botColorSchemes,
        setBotColorSchemes,
        selectedBotInfo,
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
        canShowSuccessfullyUpdatedAlert,
        setCanShowSuccessfullyUpdatedAlert,
        canShowSuccessfullyDeletedAlert,
        setCanShowSuccessfullyDeletedAlert,
        onClickResetForm,
        onClickCreateBot,
        onClickDeleteBot,
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
