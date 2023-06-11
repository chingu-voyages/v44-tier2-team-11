import LeaderboardBot from './LeaderboardBot';
import LeaderboardCounter from './LeaderboardCounter';

// NPM
import propTypes from 'prop-types';

const LeaderboardRow = ({ className = '', colorSchemes, win, lose, name }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="flex w-full grow justify-center">
        <LeaderboardBot {...colorSchemes} name={name} />
      </div>
      <LeaderboardCounter className="flex w-full grow justify-center">
        {win}
      </LeaderboardCounter>
      <LeaderboardCounter className="flex w-full grow justify-center">
        {lose}
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
