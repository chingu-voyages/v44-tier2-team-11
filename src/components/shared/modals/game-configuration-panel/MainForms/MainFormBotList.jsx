import BotDynamic from '../../../bots/BotDynamic.jsx';
import PlusIcon from '../../../icons/PlusIcon.jsx';

// Context
import globalContext from '../../../../../contexts/global-context/global-context.js';

// NPM
import PropTypes from 'prop-types';
import { useContext } from 'react';

const MainFormBotList = ({ onClickShowForm, setSelectedBotName }) => {
  const { bots } = useContext(globalContext);

  const onClickSelectBot = (e) => {
    const BTN = e.currentTarget;
    const NAME = BTN.dataset.name;
    setSelectedBotName(NAME);
  };

  if (bots.length === 0) {
    return (
      <div>
        <button
          type="button"
          className="h-[60px] w-[70px] rounded-xl bg-form-400 p-5 hover:bg-form-500/50 focus:bg-form-500/50"
          onClick={onClickShowForm}
        >
          <PlusIcon className="block h-full w-full fill-form-600" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {bots.map((bot) => (
        <button
          key={bot.name}
          data-name={bot.name}
          type="button"
          style={{
            borderColor: bot.colorSchemes.avatarBorder,
            backgroundColor: bot.colorSchemes.avatarBg,
          }}
          className={`mr-3 h-[60px] w-[70px] rounded-xl border-[3px] p-3`}
          onClick={onClickSelectBot}
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
        className="h-[60px] w-[70px] rounded-xl bg-form-400 p-5 hover:bg-form-500/50 focus:bg-form-500/50"
        onClick={onClickShowForm}
      >
        <PlusIcon className="block h-full w-full fill-form-600" />
      </button>
    </div>
  );
};

MainFormBotList.propTypes = {
  onClickShowForm: PropTypes.func.isRequired,
  setSelectedBotName: PropTypes.func.isRequired,
};

export default MainFormBotList;
