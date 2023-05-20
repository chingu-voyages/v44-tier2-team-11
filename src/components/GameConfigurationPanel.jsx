import Modal from './Modal';

// NPM
import PropTypes from 'prop-types';

const GameConfigurationPanel = ({ shouldShow, onClickCloseModal }) => {
  return (
    <Modal
      shouldShow={shouldShow}
      onClickCloseModal={onClickCloseModal}
    ></Modal>
  );
};

GameConfigurationPanel.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

export default GameConfigurationPanel;
