import BotFormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';
import { useContext } from 'react';
import PropTypes from 'prop-types';

const BotFormsName = ({ className }) => {
  const { botName, setBotName } = useContext(BotFormContext);

  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor="botNameTxt"
        className="mb-1 cursor-pointer self-start text-sm font-black text-form-900"
      >
        Bot Name:
      </label>
      <input
        type="text"
        placeholder="Place bot name here"
        id="botNameTxt"
        className="rounded-lg bg-form-300 px-2 py-3 text-sm font-bold outline-none transition-shadow duration-100 ease-in hover:bg-primary-50 focus:bg-primary-50 focus:text-form-900 focus:ring-4 focus:ring-primary-300"
        value={botName}
        onChange={(e) => setBotName(e.target.value)}
      />
    </div>
  );
};

BotFormsName.propTypes = {
  className: PropTypes.string,
};
export default BotFormsName;
