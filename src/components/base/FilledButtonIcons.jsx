import PropTypes from 'prop-types';

const FilledButtonIcons = ({ className, disabled, children, onClick }) => {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 fill-white p-2.5 outline-none transition-shadow duration-100 ease-in hover:bg-primary-600/75 focus:bg-primary-600/75 focus:ring-4 focus:ring-primary-300 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
      onClick={() => (!disabled ? onClick() : null)}
    >
      {children}
    </button>
  );
};

FilledButtonIcons.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default FilledButtonIcons;
