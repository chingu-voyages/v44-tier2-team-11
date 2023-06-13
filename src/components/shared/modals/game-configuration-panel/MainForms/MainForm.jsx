import ModalTitle from '../../../../base/ModalTitle.jsx';
import MainFormOperation from './MainFormOperation.jsx';
import MainFormSpeed from './MainFormSpeed.jsx';
import MainFormBotList from './MainFormBotList.jsx';
import FadedButton from '../../../../base/FadedButton.jsx';
import FilledButton from '../../../../base/FilledButton.jsx';
import AlertDanger from '../../../../base/AlertDanger.jsx';
import AlertSuccess from '../../../../base/AlertSuccess.jsx';

// Context
import GlobalContext from '../../../../../contexts/global-context/global-context.js';
import GameConfigurationPanelContext from '../../../../../contexts/game-configuration-panel/game-configuration-panel-context.js';

// NPM
import { useContext, useState, useRef } from 'react';

const MainForm = () => {
  const { configuration, setConfiguration, bots, setBots, botScores } = useContext(GlobalContext);
  const { setSelectedBotName, onClickShowForm } = useContext(
    GameConfigurationPanelContext
  );

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [operation, setOperation] = useState(configuration.operation);
  const [speedInSecond, setSpeedInSecond] = useState(
    configuration.speed / 1000
  );

  const onClickResetBots = () => {
    setBots([]);
    botScores.current = [];
  }

  const onClickResetForm = () => {
    setShowErrorAlert(false);
    setShowSuccessAlert(false);
    setOperation(configuration.operation);
    setSpeedInSecond(configuration.speed / 1000);
  };
  const onClickSaveConfiguration = () => {
    setShowErrorAlert(false);

    if (bots.length === 0) {
      setShowErrorAlert(true);
      return;
    }

    // Save to the global context the current configuration
    const CONFIG = {
      operation: operation,
      speed: speedInSecond * 1000, // Convert into seconds
    };

    setShowSuccessAlert(true);
    setConfiguration(CONFIG);
  };
  const onClickSwitchForm = () => {
    setShowErrorAlert(false);
    setShowSuccessAlert(false);
    onClickShowForm();
  };

  return (
    <>
      <ModalTitle>Configurations</ModalTitle>
      <AlertSuccess
        className="mx-auto mb-5 max-w-[180px]"
        canShow={showSuccessAlert}
      >
        Successfully updated!
      </AlertSuccess>
      <AlertDanger
        className="mx-auto mb-5 max-w-[350px]"
        canShow={showErrorAlert}
      >
        Please add at-least two bots.
      </AlertDanger>
      <div className="mb-6">
        <MainFormOperation operation={operation} setOperation={setOperation} />
      </div>
      <div className="mb-6">
        <MainFormSpeed second={speedInSecond} setSecond={setSpeedInSecond} />
      </div>
      <div>
        <span className="mb-2 inline-block text-sm font-black text-form-900">
          Your Bots:
        </span>
        <MainFormBotList
          setSelectedBotName={setSelectedBotName}
          onClickShowForm={onClickSwitchForm}
        />
      </div>
      <div className="mt-6 flex justify-end">
        <FadedButton onClick={onClickResetBots}>Reset</FadedButton>
        <FilledButton onClick={onClickSaveConfiguration}>Save</FilledButton>
      </div>
    </>
  );
};

export default MainForm;
