import BotAvatarButton from '../../../buttons/BotAvatarButton.jsx';
import AddBotButton from '../../../buttons/AddBotButton.jsx';

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
        <AddBotButton onClick={onClickShowForm} />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {bots.map((bot) => (
        <BotAvatarButton
          key={bot.name}
          name={bot.name}
          background={bot.colorSchemes.background}
          border={bot.colorSchemes.border}
          base={bot.colorSchemes.base}
          stroke={bot.colorSchemes.stroke}
          onClick={onClickSelectBot}
        />
      ))}
      {bots.length < 4 ? <AddBotButton onClick={onClickShowForm} /> : null}
    </div>
  );
};
MainFormBotList.propTypes = {
  onClickShowForm: PropTypes.func.isRequired,
  setSelectedBotName: PropTypes.func.isRequired,
};

export default MainFormBotList;
