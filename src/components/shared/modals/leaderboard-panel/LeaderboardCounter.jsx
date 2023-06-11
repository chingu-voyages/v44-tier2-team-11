import propTypes from 'prop-types';

const LeaderboardCounter = ({ children, className = '' }) => {
  return (
    <span className={`${className} font-bold text-primary-950`}>
      {children}
    </span>
  );
};

LeaderboardCounter.propTypes = {
  children: propTypes.string,
  className: propTypes.string,
};

export default LeaderboardCounter;
