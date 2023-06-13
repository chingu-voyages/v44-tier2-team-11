import FadedButton from '../../../../base/FadedButton.jsx';
import FilledButton from '../../../../base/FilledButton.jsx';

// Context
import GlobalContext from '../../../../../contexts/global-context/global-context.js';
import FormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';

// NPM
import { PropTypes } from 'prop-types';
import { useContext, useEffect } from 'react';

const BotFormsControl = ({ onClickGoBackToMain, className = '' }) => {
  const {
    selectedBotInfo,
    onClickDeleteBot,
    onClickResetForm,
    onClickCreateBot,
  } = useContext(FormContext);

  const { bots } = useContext(GlobalContext);

  const onClickLimitBot = () => {
    if (bots.length < 3) {
      onClickCreateBot();
      return;
    }

    onClickCreateBot();
    onClickGoBackToMain();
    onClickResetForm();
  };

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
      <FilledButton onClick={onClickLimitBot}>
        {Object.keys(selectedBotInfo).length !== 0
          ? 'Update Bot'
          : 'Create Bot'}
      </FilledButton>
    </div>
  );
};

BotFormsControl.propTypes = {
  onClickGoBackToMain: PropTypes.func,
  className: PropTypes.string,
};
export default BotFormsControl;
