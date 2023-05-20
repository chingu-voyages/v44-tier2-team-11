import Modal from './base/Modal';
import OperationForm from './forms/OperationForm';
import SpeedForm from './forms/SpeedForm';
import BotPanel from './forms/BotPanel';

// NPM
import PropTypes from 'prop-types';

const GameConfigurationPanel = ({ shouldShow, onClickCloseModal }) => {
  return (
    <Modal
      mainContentWrapperClassName="w-11/12 max-w-3xl"
      shouldShow={shouldShow}
      onClickCloseModal={onClickCloseModal}
    >
      <h2 className="relative mb-12 inline-block text-xl font-black text-primary-900 before:absolute before:-bottom-2 before:left-0 before:block before:h-1 before:w-3/5 before:rounded-lg before:bg-primary-900">
        Configurations
      </h2>
      <div className="mb-6">
        <OperationForm />
      </div>
      <div className="mb-6">
        <SpeedForm />
      </div>
      <BotPanel />

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
    </Modal>
  );
};

GameConfigurationPanel.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

export default GameConfigurationPanel;
