import PropTypes from 'prop-types';
const AlertSuccess = ({ canShow, className, children }) => {
  if (!canShow) {
    return <></>;
  }

  return (
    <p
      className={`rounded-lg bg-emerald-500 py-3 text-center text-sm font-bold text-white ${className}`}
    >
      {children}
    </p>
  );
};

AlertSuccess.propTypes = {
  canShow: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
};
export default AlertSuccess;
