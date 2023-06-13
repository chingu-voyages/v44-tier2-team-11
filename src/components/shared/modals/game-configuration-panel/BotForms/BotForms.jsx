import BotFormContext from '../../../../../contexts/bot-form-context/BotFormContext.jsx';
import BotFormsAlerts from './BotFormsAlerts.jsx';
import BotFormsAvatarPreviewer from './BotFormsAvatarPreviewer.jsx';
import BotFormsName from './BotFormsName.jsx';
import BotFormsBooleanValue from './BotFormsBooleanValue.jsx';
import BotFormsDirection from './BotFormsDirection.jsx';
import BotFormsControl from './BotFormsControl.jsx';
import GameConfigurationPanelContext from '../../../../../contexts/game-configuration-panel/game-configuration-panel-context.js';

import { useContext } from 'react';

const BotForms = () => {
  const { onClickShowMainForm } = useContext(GameConfigurationPanelContext);

  return (
    <BotFormContext>
      <BotFormsAlerts
        className="mb-4"
        onClickGoBackToMain={onClickShowMainForm}
      />
      <BotFormsAvatarPreviewer className="mb-6" />
      <BotFormsName className="mb-6 max-w-sm" />
      <BotFormsBooleanValue className="mb-6" />
      <BotFormsDirection className="mb-6 max-w-sm" />
      <BotFormsControl onClickGoBackToMain={onClickShowMainForm} />
    </BotFormContext>
  );
};

export default BotForms;
