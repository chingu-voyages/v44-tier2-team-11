import PropTypes from 'prop-types';

const ModalTitle = ({ className, children }) => {
  return (
    <h2
      className={`relative mb-12 inline-block text-xl font-black text-primary-900 before:absolute before:-bottom-2 before:left-0 before:block before:h-1 before:w-3/5 before:rounded-lg before:bg-primary-900 ${className}`}
    >
      {children}
    </h2>
  );
};

ModalTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default ModalTitle;
