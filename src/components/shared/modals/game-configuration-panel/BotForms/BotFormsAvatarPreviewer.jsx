import BotDynamic from '../../../bots/BotDynamic.jsx';
import GenerateColorFadedButton from '../../../buttons/GenerateColorFadedButton.jsx';

// Helpers
import {
  generatePastelColor,
  makeColorDark,
  makeColorLight,
} from '../../../../../utilities/generate-colors.js';

// Context
import BotFormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';

// NPM
import PropTypes from 'prop-types';
import { useContext } from 'react';

const BotFormsAvatarPreviewer = ({ className }) => {
  const { botColorSchemes, setBotColorSchemes } = useContext(BotFormContext);

  const generateColorScheme = () => {
    const COLOR = generatePastelColor();
    const DARKENED_COLOR = makeColorDark(COLOR, 0.2);
    const LIGHTENED_COLOR = makeColorLight(COLOR, 0.2);

    setBotColorSchemes({
      background: makeColorLight(LIGHTENED_COLOR, 0.8),
      border: DARKENED_COLOR,
      base: LIGHTENED_COLOR,
      stroke: DARKENED_COLOR,
    });
  };

  return (
    <div className={`${className}`}>
      <div className="mb-4 flex justify-center">
        <span
          style={{
            backgroundColor: botColorSchemes.background,
            borderColor: botColorSchemes.border,
          }}
          className={`h-[80px] w-[100px] rounded-lg border-[3px] p-2`}
        >
          <BotDynamic
            baseColor={botColorSchemes.base}
            strokeColor={botColorSchemes.stroke}
            className={'block h-full w-full'}
          />
        </span>
      </div>
      <div className="mb-4">
        <GenerateColorFadedButton onClick={generateColorScheme} />
      </div>
    </div>
  );
};

BotFormsAvatarPreviewer.propTypes = {
  className: PropTypes.string,
};
export default BotFormsAvatarPreviewer;
