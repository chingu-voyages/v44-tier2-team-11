import PropTypes from 'prop-types';
import DiceFiveIcon from '../icons/DiceFiveIcon.jsx';

const GoBackFadedButton = ({
  rootClassName,
  iconClassName,
  textClassName,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`group flex rounded-lg bg-form-200 px-4 py-2 duration-100 ease-linear hover:bg-primary-100 focus:bg-primary-100 focus:ring-4 focus:ring-primary-300 ${rootClassName}`}
      onClick={onClick}
    >
      <span className="mr-2 flex w-4">
        <DiceFiveIcon
          className={`block h-full w-full fill-form-600 group-hover:fill-primary-500 group-focus:fill-primary-500 ${iconClassName}`}
        />
      </span>

      <span
        className={`text-md font-bold text-form-600 group-hover:text-primary-500 group-focus:text-primary-500 ${textClassName}`}
      >
        Generate Color Scheme
      </span>
    </button>
  );
};

GoBackFadedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  rootClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  textClassName: PropTypes.string,
};

export default GoBackFadedButton;
