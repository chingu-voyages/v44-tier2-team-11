import FadedButton from '../../../../base/FadedButton.jsx';
import FilledButton from '../../../../base/FilledButton.jsx';

import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import FormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';

const BotFormsControl = ({ className }) => {
  const { onClickResetForm, onClickCreateBot } = useContext(FormContext);

  return (
    <div className={`mt-6 flex justify-end ${className}`}>
      <FadedButton onClick={onClickResetForm}>Reset</FadedButton>
      <FilledButton onClick={onClickCreateBot}>Create Bot</FilledButton>
    </div>
  );
};

BotFormsControl.propTypes = {
  className: PropTypes.string,
};
export default BotFormsControl;
