import PropTypes from 'prop-types';
const FilledButton = ({ className, onClick, children }) => {
  return (
    <button
      type="button"
      className={`rounded-lg bg-primary-500 px-4 py-3 text-sm font-black text-white outline-none transition-shadow duration-100 ease-in hover:bg-primary-600/80 focus:bg-primary-600/80 focus:ring-4 focus:ring-primary-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

FilledButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default FilledButton;
