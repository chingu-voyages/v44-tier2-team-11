import AlertDanger from '../../../../base/AlertDanger.jsx';
import AlertSuccess from '../../../../base/AlertSuccess.jsx';

import BotFormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import GoBackFadedButton from '../../../buttons/GoBackFadedButton.jsx';

const BotFormsAlert = ({ className, onClickGoBackToMain }) => {
  const { canShowSuccessfullyCreatedAlert, failedAlertText, onClickResetForm } =
    useContext(BotFormContext);

  const onClickResetFormAndShowMainForm = () => {
    onClickGoBackToMain();
    onClickResetForm();
  };

  return (
    <div>
      <GoBackFadedButton onClick={onClickResetFormAndShowMainForm} />
      <div className={`mt-6 ${className}`}>
        <AlertSuccess
          canShow={canShowSuccessfullyCreatedAlert}
          className={'mx-auto w-full max-w-[350px]'}
        >
          You have successfully created a bot!
        </AlertSuccess>
        <AlertDanger
          canShow={failedAlertText !== ''}
          className={'mx-auto w-full max-w-[350px]'}
        >
          {failedAlertText}
        </AlertDanger>
      </div>
    </div>
  );
};

BotFormsAlert.propTypes = {
  onClickGoBackToMain: PropTypes.func.isRequired,
  className: PropTypes.string,
};
export default BotFormsAlert;
