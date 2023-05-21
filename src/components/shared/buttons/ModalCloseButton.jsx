import PropTypes from 'prop-types';
import XMarkIcon from '../icons/XMarkIcon.jsx';

const XMarkButtonIcon = ({ className, onClick }) => {
  return (
    <button
      type="button"
      className={`group h-6 w-6 cursor-pointer rounded-lg p-1 outline-none transition-shadow duration-100 hover:bg-primary-50 focus:bg-primary-50 focus:ring-4 focus:ring-primary-300 ${className}`}
      onClick={onClick}
    >
      <XMarkIcon
        className={
          'fill-slate-600 group-hover:fill-primary-500 group-focus:fill-primary-500'
        }
      />
    </button>
  );
};

XMarkButtonIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default XMarkButtonIcon;
