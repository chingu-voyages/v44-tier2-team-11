import BotFormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';
import { useContext } from 'react';
import PropTypes from 'prop-types';

const BotFormsDirection = ({ className }) => {
  const { botDirection, setBotDirection } = useContext(BotFormContext);

  return (
    <div className={`flex h-full flex-col ${className}`}>
      <label
        htmlFor="botDirection"
        className="mb-1 cursor-pointer self-start text-sm font-black text-form-900"
      >
        Bot Direction:
      </label>
      <select
        id="botDirection"
        className="h-full cursor-pointer rounded-lg bg-form-300 px-4 py-3 text-sm font-bold text-form-700 outline-none transition-shadow duration-100 ease-in hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-500 focus:ring-4 focus:ring-primary-300"
        onChange={(e) => setBotDirection(e.target.value)}
        value={botDirection}
      >
        <option value="" disabled className="bg-white text-slate-900">
          -- Please Select --
        </option>
        <option className="bg-white text-slate-900" value="north">
          North
        </option>
        <option className="bg-white text-slate-900" value="south">
          South
        </option>
        <option className="bg-white text-slate-900" value="west">
          West
        </option>
        <option className="bg-white text-slate-900" value="east">
          East
        </option>
      </select>
    </div>
  );
};

BotFormsDirection.propTypes = {
  className: PropTypes.string,
};

export default BotFormsDirection;
