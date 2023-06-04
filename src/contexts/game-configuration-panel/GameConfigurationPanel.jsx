import GameConfigurationPanelContext from './game-configuration-panel-context.js';
import GlobalContext from '../global-context/global-context.js';

// NPM
import anime from 'animejs';
import { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Context = ({ children }) => {
  const { bots, showConfigurationPanel, setShowConfigurationPanel } =
    useContext(GlobalContext);
  const mainFormRef = useRef(null);
  const botFormsRef = useRef(null);
  const [showBotForm, setShowBotForm] = useState(false);
  const [selectedBotName, setSelectedBotName] = useState('');
  const [selectedBotInfo, setSelectedBotInfo] = useState({});

  const onClickShowForm = () => {
    setShowBotForm(true);
  };

  // Hide main form and show forms for creating bots
  const hideMainForm = () => {
    const MAIN_FORM = mainFormRef.current;
    const MAIN_FORM_PARENT = MAIN_FORM.parentElement;
    const FORM_RECT = MAIN_FORM.getBoundingClientRect();

    // Get the height of main form because position will change to 'absolute'
    Object.assign(MAIN_FORM_PARENT.style, {
      height: `${FORM_RECT.height}px`,
    });

    // Before animating the main form, make sure it is animatable
    Object.assign(mainFormRef.current.style, {
      position: 'absolute',
      width: '100%',
    });

    // Before animating the bot form, make sure it is animatable
    Object.assign(botFormsRef.current.style, {
      position: 'absolute',
      right: '-200%',
      display: 'block',
    });

    // Exit animation of main wrapper
    anime({
      targets: mainFormRef.current,
      left: '-200%',
      duration: 450,
      easing: 'easeOutCubic',
    });

    // Animate the height of parent—relative to component BotForm's height
    anime({
      targets: MAIN_FORM_PARENT,
      height: `${botFormsRef.current.getBoundingClientRect().height}px`,
      complete: () => (MAIN_FORM_PARENT.style = null),
    });

    // Entrance animation of BotForms component
    anime({
      targets: botFormsRef.current,
      right: 0,
      duration: 450,
      easing: 'easeOutCubic',
      complete: () => {
        Object.assign(mainFormRef.current.style, {
          display: 'none',
          position: null,
          width: null,
        });

        // Before animating the main form, make sure it is animatable
        Object.assign(botFormsRef.current.style, {
          position: null,
          right: null,
          display: 'block',
        });
      },
    });
  };

  // Show main form again
  const onClickShowMainForm = () => {
    const BOT_FORM = botFormsRef.current;
    const MAIN_FORM_PARENT = BOT_FORM.parentElement;
    const BOT_FORM_RECT = BOT_FORM.getBoundingClientRect();

    // Get the height of main form because position will change to 'absolute'
    Object.assign(MAIN_FORM_PARENT.style, {
      height: `${BOT_FORM_RECT.height}px`,
    });

    // Before animating the main form, make sure it is animatable
    Object.assign(mainFormRef.current.style, {
      position: 'absolute',
      left: '200',
      width: '100%',
      display: 'block',
    });

    // Before animating the bot form, make sure it is animatable
    Object.assign(BOT_FORM.style, {
      position: 'absolute',
      right: '0',
    });

    // Exit animation of main wrapper
    anime({
      targets: BOT_FORM,
      right: '-200%',
      duration: 450,
      easing: 'easeOutCubic',
    });

    // Animate the height of parent—relative to component BotForm's height
    anime({
      targets: MAIN_FORM_PARENT,
      height: `${mainFormRef.current.getBoundingClientRect().height}px`,
      complete: () => (MAIN_FORM_PARENT.style = null),
    });

    // Entrance animation of BotForms component
    anime({
      targets: mainFormRef.current,
      left: '0%',
      duration: 450,
      easing: 'easeOutCubic',
      complete: () => {
        MAIN_FORM_PARENT.style = null;
        BOT_FORM.style = null;
        Object.assign(mainFormRef.current.style, {
          position: null,
          left: null,
          width: null,
          display: 'block',
        });
        setShowBotForm(false);
        setSelectedBotName('');
      },
    });
  };

  const onClickCloseModal = () => {
    setShowConfigurationPanel(false);

    // Modal has an animation duration of 450ms, wait for it to end.
    setTimeout(() => {
      setShowBotForm(false);
      mainFormRef.current.parentElement.style = null;
      mainFormRef.current.style = null;
      botFormsRef.current.style = null;
      setShowBotForm(false);
      setSelectedBotName('');
    }, 450);
  };

  useEffect(() => {
    // If nothing is selected, reset the bot info
    if (selectedBotName === '') {
      setSelectedBotInfo({});
      return;
    }

    // Retrieve the info from global context
    const BOT = bots.filter((botObj) => botObj.name === selectedBotName);
    setSelectedBotInfo(BOT[0]);
  }, [selectedBotName, bots]);
  useEffect(() => {
    if (showBotForm) {
      hideMainForm();
    }
  }, [showBotForm]);
  useEffect(() => {
    if (selectedBotName !== '') {
      hideMainForm();
    }
  }, [selectedBotName]);

  return (
    <GameConfigurationPanelContext.Provider
      value={{
        showConfigurationPanel,
        setShowConfigurationPanel,
        selectedBotInfo,
        setSelectedBotInfo,
        selectedBotName,
        setSelectedBotName,
        mainFormRef,
        botFormsRef,
        onClickCloseModal,
        onClickShowForm,
        onClickShowMainForm,
      }}
    >
      {children}
    </GameConfigurationPanelContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default Context;
