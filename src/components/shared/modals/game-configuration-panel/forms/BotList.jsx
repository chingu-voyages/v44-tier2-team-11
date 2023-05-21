import BotDynamic from '../../../bots/BotDynamic.jsx';
import PlusIcon from '../../../icons/PlusIcon.jsx';

// Context
import globalContext from '../../../../../contexts/global-context.js';

// NPM
import PropTypes from 'prop-types';
import { useContext } from 'react';

const BotList = ({ onClickShowForm }) => {
  const { bots } = useContext(globalContext);

  if (bots.length === 0) {
    return (
      <div>
        <button
          type="button"
          className="h-[60px] w-[70px] rounded-xl bg-form-400 px-2 py-3 hover:bg-form-500/50 focus:bg-form-500/50"
          onClick={onClickShowForm}
        >
          <PlusIcon className="block h-full w-full fill-form-600" />
        </button>
      </div>
    );
  }

  return (
    <div>
      {bots.map((bot) => (
        <button
          key={bot.name}
          type="button"
          style={{
            borderColor: bot.colorSchemes.avatarBorder,
            backgroundColor: bot.colorSchemes.avatarBg,
          }}
          className={`mr-3 h-[60px] w-[70px] rounded-xl border-2 border-[3px] px-2 py-3`}
        >
          <BotDynamic
            baseColor={bot.colorSchemes.baseColor}
            strokeColor={bot.colorSchemes.strokeColor}
            className={'block h-full w-full'}
          />
        </button>
      ))}
      <button
        type="button"
        className="h-[60px] w-[70px] rounded-xl bg-form-400 px-2 py-3 hover:bg-form-500/50 focus:bg-form-500/50"
        onClick={onClickShowForm}
      >
        <PlusIcon className="block h-full w-full fill-form-600" />
      </button>
    </div>
  );
};

BotList.propTypes = {
  onClickShowForm: PropTypes.func.isRequired,
};

export default BotList;
