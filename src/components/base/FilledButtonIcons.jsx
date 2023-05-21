import PropTypes from 'prop-types';

const FilledButtonIcons = ({ className, children }) => {
  return (
    <button className={`mr-4 flex h-10 w-10 items-center justify-center hover:bg-primary-600/75 focus:bg-primary-600/75 outline-none focus:ring-4 focus:ring-primary-300 transition-shadow duration-100 ease-in rounded-full bg-primary-500 fill-white p-2.5 ${className}`}>
      {children}
    </button>
  );
};

FilledButtonIcons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default FilledButtonIcons;
