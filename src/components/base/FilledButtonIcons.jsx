import PropTypes from 'prop-types';

const FilledButtonIcons = ({ className, children }) => {
  return (
    <button className={`mr-4 flex h-10 w-10 items-center justify-center hover:bg-red-600/80 focus:bg-red-600/80 outline-none focus:ring-4 focus:ring-primary-300 transition-shadow duration-100 ease-in rounded-full bg-red-500 fill-white p-2.5 ${className}`}>
      {children}
    </button>
  );
};

FilledButtonIcons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default FilledButtonIcons;
