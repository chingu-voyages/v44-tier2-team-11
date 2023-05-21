import DiceFiveIcon from '../../../icons/DiceFiveIcon.jsx';
import {
  generatePastelColor,
  makeColorLight,
  makeColorDark,
} from '../../../../../utilities/generate-colors.js';

// NPM
import PropTypes from 'prop-types';

const BotColorScheme = ({
  setBotAvatarBg,
  setBotAvatarBorder,
  setBaseColor,
  setStrokeColor,
}) => {
  const generateColorScheme = () => {
    const COLOR = generatePastelColor();
    const DARKENED_COLOR = makeColorDark(COLOR, 0.2);
    const LIGHTENED_COLOR = makeColorLight(COLOR, 0.2);

    setBotAvatarBorder(DARKENED_COLOR);
    setBotAvatarBg(makeColorLight(LIGHTENED_COLOR, 0.8));
    setBaseColor(LIGHTENED_COLOR);
    setStrokeColor(DARKENED_COLOR);
  };

  return (
    <div>
      <button
        type="button"
        className="group flex rounded-lg bg-form-200 px-4 py-2 duration-100 ease-linear hover:bg-primary-100 focus:bg-primary-100 focus:ring-4 focus:ring-primary-300"
        onClick={generateColorScheme}
      >
        <span className="mr-2 flex w-4">
          <DiceFiveIcon className="block h-full w-full fill-form-600 group-hover:fill-primary-500 group-focus:fill-primary-500" />
        </span>

        <span className="text-md font-bold text-form-600 group-hover:text-primary-500 group-focus:text-primary-500">
          Generate Color Scheme
        </span>
      </button>
    </div>
  );
};

BotColorScheme.propTypes = {
  setBotAvatarBg: PropTypes.func.isRequired,
  setBotAvatarBorder: PropTypes.func.isRequired,
  setBaseColor: PropTypes.func.isRequired,
  setStrokeColor: PropTypes.func.isRequired,
};

export default BotColorScheme;
