import FadedButton from '../../../../base/FadedButton.jsx';
import FilledButton from '../../../../base/FilledButton.jsx';

// Context
import FormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';

// NPM
import { PropTypes } from 'prop-types';
import { useContext } from 'react';

const BotFormsControl = ({ className = '' }) => {
  const {
    selectedBotInfo,
    onClickDeleteBot,
    onClickResetForm,
    onClickCreateBot,
  } = useContext(FormContext);

  return (
    <div
      className={`mt-8 flex flex-col min-[450px]:flex-row min-[450px]:justify-end ${className}`}
    >
      {Object.keys(selectedBotInfo).length !== 0 ? (
        <FadedButton
          className="mb-2 min-[450px]:mb-0 min-[450px]:mr-auto"
          onClick={onClickDeleteBot}
        >
          Delete Bot
        </FadedButton>
      ) : null}
      <FadedButton onClick={onClickResetForm} className="mb-2 min-[450px]:mb-0">
        Reset
      </FadedButton>
      <FilledButton onClick={onClickCreateBot}>
        {Object.keys(selectedBotInfo).length !== 0
          ? 'Update Bot'
          : 'Create Bot'}
      </FilledButton>
    </div>
  );
};

BotFormsControl.propTypes = {
  className: PropTypes.string,
};
export default BotFormsControl;
