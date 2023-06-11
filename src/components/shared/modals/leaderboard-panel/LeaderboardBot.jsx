import { makeColorLight } from '../../../../utilities/generate-colors.js';

// Components
import BotDynamic from '../../bots/BotDynamic.jsx';

// NPM
import propTypes from 'prop-types';

const bgColor = '#fdcac8';
const lightenedBg = makeColorLight(bgColor, 0.2);
const strokeColor = '#B91C19';

const LeaderboardBot = ({
  className = '',
  background,
  border,
  base,
  stroke,
  name,
}) => {
  return (
    <div
      style={{
        backgroundColor: background,
        borderColor: border,
      }}
      className={`${className} relative flex h-[60px] w-[60px] items-center justify-center rounded-full border-2`}
    >
      <div className="h-[65%] w-[65%]">
        <BotDynamic
          className="h-full w-full"
          baseColor={base}
          strokeColor={stroke}
        />
        <span
          style={{
            backgroundColor: stroke,
          }}
          className="absolute -bottom-4 left-0 right-0 m-auto rounded-md py-1 text-center text-xs font-bold text-white"
        >
          {name}
        </span>
      </div>
    </div>
  );
};

LeaderboardBot.propTypes = {
  className: propTypes.string,
};
export default LeaderboardBot;
