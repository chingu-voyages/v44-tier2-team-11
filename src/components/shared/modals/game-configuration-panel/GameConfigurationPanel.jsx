import Modal from '../../../base/Modal.jsx';
import OperationForm from './forms/OperationForm.jsx';
import SpeedForm from './forms/SpeedForm.jsx';
import BotList from './forms/BotList.jsx';
import BotForms from './forms/BotForms.jsx';

// Context
import GlobalContext from '../../../../contexts/global-context.js';

// NPM
import { useContext, useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import botForms from './forms/BotForms.jsx';

const GameConfigurationPanel = () => {
  const { showConfigurationPanel, setShowConfigurationPanel } =
    useContext(GlobalContext);
  const mainFormRef = useRef(null);
  const botFormsRef = useRef(null);
  const [showBotForm, setShowBotForm] = useState(false);

  const onClickCloseModal = () => {
    setShowConfigurationPanel(false);
    if (showBotForm) {
      // Modal has an animation duration of 450ms
      setTimeout(() => {
        setShowBotForm(false);
        mainFormRef.current.parentElement.style = null;
        mainFormRef.current.style = null;
        botFormsRef.current.style = null;
      }, 450);
    }
  };

  const onClickShowForm = () => {
    setShowBotForm(true);
  };

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
    });

    // Entrance animation of BotForms component
    anime({
      targets: botFormsRef.current,
      right: 0,
      duration: 450,
      easing: 'easeOutCubic',
    });
  };

  const onClickShowMainForm = () => {
    const BOT_FORM = botFormsRef.current;
    const MAIN_FORM_PARENT = BOT_FORM.parentElement;

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
    });

    // Entrance animation of BotForms component
    anime({
      targets: mainFormRef.current,
      left: '0%',
      duration: 450,
      easing: 'easeOutCubic',
      complete: () => setShowBotForm(false),
    });
  };

  useEffect(() => {
    if (showBotForm) {
      hideMainForm();
    }
  }, [showBotForm]);

  return (
    <Modal
      mainContentWrapperClassName="w-11/12 max-w-3xl overflow-hidden"
      shouldShow={showConfigurationPanel}
      onClickCloseModal={onClickCloseModal}
    >
      <div className="relative">
        <div ref={mainFormRef}>
          <h2 className="relative mb-12 inline-block text-xl font-black text-primary-900 before:absolute before:-bottom-2 before:left-0 before:block before:h-1 before:w-3/5 before:rounded-lg before:bg-primary-900">
            Configurations
          </h2>
          <div className="mb-6">
            <OperationForm />
          </div>
          <div className="mb-6">
            <SpeedForm />
          </div>
          <div>
            <span className="mb-2 inline-block text-sm font-black text-form-900">
              Your Bots:
            </span>
            <BotList onClickShowForm={onClickShowForm} />
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
              Save
            </button>
          </div>
        </div>
        <div ref={botFormsRef} className="absolute right-[-200%] top-0 w-full">
          <BotForms onClickGoBackToMain={onClickShowMainForm} />
        </div>
      </div>
    </Modal>
  );
};

export default GameConfigurationPanel;
