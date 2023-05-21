import PropTypes from 'prop-types';

const ErrorAlert = ({ className, shouldShow, children }) => {
  if (!shouldShow) {
    return <></>;
  }

  return (
    <p
      className={`mx-auto w-full rounded-lg bg-primary-500 py-3 text-center text-sm font-bold text-white ${className}`}
    >
      {children}
    </p>
  );
};

ErrorAlert.propTypes = {
  children: PropTypes.string.isRequired,
  shouldShow: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default ErrorAlert;
