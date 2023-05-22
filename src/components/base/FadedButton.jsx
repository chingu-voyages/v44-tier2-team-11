import PropTypes from 'prop-types';
const FadedButton = ({ className, onClick, children }) => {
  return (
    <button
      type="button"
      className={`mr-2 rounded-lg bg-primary-100 px-4 py-3 text-sm font-black text-primary-500 outline-none transition-shadow duration-100 ease-in hover:bg-primary-200/60 focus:bg-primary-200/60 focus:ring-4 focus:ring-primary-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

FadedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default FadedButton;
