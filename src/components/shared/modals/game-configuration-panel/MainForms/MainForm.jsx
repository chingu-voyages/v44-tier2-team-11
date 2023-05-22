import MainFormOperation from './MainFormOperation.jsx';
import MainFormSpeed from './MainFormSpeed.jsx';
import MainFormBotList from './MainFormBotList.jsx';
import FadedButton from '../../../../base/FadedButton.jsx';
import FilledButton from '../../../../base/FilledButton.jsx';
import ErrorAlert from '../../../../base/ErrorAlert.jsx';

// Context
import GlobalContext from '../../../../../contexts/global-context/global-context.js';

// NPM
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MainForm = ({ onClickShowForm, setSelectedBotName }) => {
  const { bots } = useContext(GlobalContext);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [operation, setOperation] = useState('AND');
  const [speedInSecond, setSpeedInSecond] = useState(1);

  const onClickResetForm = () => {
    setShowErrorAlert(false);
    setOperation('AND');
    setSpeedInSecond(1);
  };
  const onClickSaveConfiguration = () => {
    setShowErrorAlert(false);

    if (bots.length === 0) {
      setShowErrorAlert(true);
      return;
    }

    // Success
    const CONFIG = {
      operation: operation,
      speed: speedInSecond * 1000, // Convert into seconds
    };
    console.log(CONFIG);
  };
  const onClickSwitchForm = () => {
    setShowErrorAlert(false);
    onClickShowForm();
  };
  return (
    <>
      <h2 className="relative mb-12 inline-block text-xl font-black text-primary-900 before:absolute before:-bottom-2 before:left-0 before:block before:h-1 before:w-3/5 before:rounded-lg before:bg-primary-900">
        Configurations
      </h2>
      <ErrorAlert className="mb-5 max-w-[350px]" shouldShow={showErrorAlert}>
        Please add at-least two bots.
      </ErrorAlert>
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
        <FadedButton onClick={onClickResetForm}>Reset</FadedButton>
        <FilledButton onClick={onClickSaveConfiguration}>Save</FilledButton>
      </div>
    </>
  );
};

MainForm.propTypes = {
  onClickShowForm: PropTypes.func.isRequired,
  setSelectedBotName: PropTypes.func.isRequired,
};
export default MainForm;
