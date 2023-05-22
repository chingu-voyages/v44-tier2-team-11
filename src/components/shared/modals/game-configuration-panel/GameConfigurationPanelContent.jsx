import MainForm from './MainForms/MainForm.jsx';
import BotForms from './BotForms/BotForms.jsx';
import Modal from '../../../base/Modal.jsx';

// Context
import GameConfigurationPanelContext from '../../../../contexts/game-configuration-panel/game-configuration-panel-context.js';

// NPM
import { useContext } from 'react';

const GameConfigurationPanelContent = () => {
  const {
    showConfigurationPanel,
    onClickCloseModal,
    mainFormRef,
    botFormsRef,
  } = useContext(GameConfigurationPanelContext);

  return (
    <Modal
      mainContentWrapperClassName="w-11/12 max-w-3xl overflow-hidden"
      shouldShow={showConfigurationPanel}
      onClickCloseModal={onClickCloseModal}
    >
      <div className="relative">
        <div ref={mainFormRef}>
          <MainForm />
        </div>
        <div ref={botFormsRef} className="hidden w-full">
          <BotForms />
        </div>
      </div>
    </Modal>
  );
};

export default GameConfigurationPanelContent;
