import PropTypes from 'prop-types';
const AlertDanger = ({ canShow, className, children }) => {
  if (!canShow) {
    return <></>;
  }

  return (
    <p
      className={`w-full rounded-lg bg-primary-500 py-3 text-center text-sm font-bold text-white ${className}`}
    >
      {children}
    </p>
  );
};

AlertDanger.propTypes = {
  canShow: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
};
export default AlertDanger;
