import PropTypes from 'prop-types';

const OperationFormButton = ({ className, operation }) => {
  return (
    <button
      type="button"
      className={`rounded-lg bg-form-300 px-4 py-2 text-xs font-black text-form-600 outline-none transition-shadow duration-100 ease-in hover:bg-form-400 focus:bg-primary-50 focus:text-primary-500 focus:ring-4 focus:ring-primary-300 ${className}`}
    >
      {operation}
    </button>
  );
};

OperationFormButton.propTypes = {
  className: PropTypes.string,
  operation: PropTypes.string,
};

export default OperationFormButton;
