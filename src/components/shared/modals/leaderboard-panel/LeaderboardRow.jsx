import LeaderboardBot from './LeaderboardBot';
import LeaderboardCounter from './LeaderboardCounter';

// NPM
import propTypes from 'prop-types';

const LeaderboardRow = ({ className = '' }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="flex w-full grow justify-center">
        <LeaderboardBot />
      </div>
      <LeaderboardCounter className="flex w-full grow justify-center">
        0
      </LeaderboardCounter>
      <LeaderboardCounter className="flex w-full grow justify-center">
        2
      </LeaderboardCounter>
      <LeaderboardCounter className="flex w-full grow justify-center">
        5
      </LeaderboardCounter>
    </div>
  );
};

LeaderboardRow.propTypes = {
  className: propTypes.string,
};
export default LeaderboardRow;
