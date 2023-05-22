import BotFormContext from '../../../../../contexts/bot-form-context/BotFormContext.jsx';
import BotFormsAlerts from './BotFormsAlerts.jsx';
import BotFormsAvatarPreviewer from './BotFormsAvatarPreviewer.jsx';
import BotFormsName from './BotFormsName.jsx';
import BotFormsBooleanValue from './BotFormsBooleanValue.jsx';
import BotFormsDirection from './BotFormsDirection.jsx';
import BotFormsControl from './BotFormsControl.jsx';

import PropTypes from 'prop-types';

const BotForms = ({ onClickGoBackToMain }) => {
  return (
    <BotFormContext>
      <BotFormsAlerts
        className="mb-4"
        onClickGoBackToMain={onClickGoBackToMain}
      />
      <BotFormsAvatarPreviewer className="mb-6" />
      <BotFormsName className="mb-6 max-w-sm" />
      <BotFormsBooleanValue className="mb-6" />
      <BotFormsDirection className="mb-6 max-w-sm" />
      <BotFormsControl />
    </BotFormContext>
  );
};

BotForms.propTypes = {
  onClickGoBackToMain: PropTypes.func.isRequired,
};
export default BotForms;
