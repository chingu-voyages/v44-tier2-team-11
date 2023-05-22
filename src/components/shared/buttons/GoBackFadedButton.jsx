import FadedButton from '../../base/FadedButton.jsx';
import ArrowLeftIcon from '../icons/ArrowLeftIcon.jsx';
import PropTypes from 'prop-types';

const GoBackFadedButton = ({
  rootClassName,
  iconClassName,
  textClassName,
  onClick,
}) => {
  return (
    <FadedButton className="flex" onClick={onClick}>
      <span className={`mr-1 flex w-3 ${rootClassName}`}>
        <ArrowLeftIcon
          className={`block h-full w-full fill-primary-500 ${iconClassName}`}
        />
      </span>
      <span className={`text-sm font-bold text-primary-500 ${textClassName}`}>
        Go back
      </span>
    </FadedButton>
  );
};

GoBackFadedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  rootClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  textClassName: PropTypes.string,
};
export default GoBackFadedButton;
