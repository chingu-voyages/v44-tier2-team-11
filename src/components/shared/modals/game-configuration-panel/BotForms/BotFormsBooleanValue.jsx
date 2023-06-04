import BotFormContext from '../../../../../contexts/bot-form-context/bot-form-context.js';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const BotFormsBooleanValue = ({ className }) => {
  const { botBooleanValue, setBotBooleanValue } = useContext(BotFormContext);

  return (
    <div className={`flex h-full flex-col ${className}`}>
      <label
        htmlFor="botNameTxt"
        className="mb-1 cursor-pointer self-start text-sm font-black text-form-900"
      >
        Bot Boolean Value:
      </label>
      <div className="flex h-full">
        <div className="mr-2">
          <input
            type="radio"
            id="botRadioFalsy"
            name="botRadioBoolean"
            value="0"
            className="peer inline appearance-none outline-none"
            checked={botBooleanValue === 0}
            onChange={(e) => setBotBooleanValue(e.target.value)}
          />
          <label
            htmlFor="botRadioFalsy"
            className="mr-2 flex h-full cursor-pointer items-center justify-center rounded-lg bg-form-300 px-5 py-3 text-xs font-black text-form-700 outline-none transition-shadow duration-100 ease-in last-of-type:mr-0 hover:bg-form-400 peer-checked:bg-primary-50 peer-checked:text-primary-500 peer-focus:ring-4 peer-focus:ring-primary-300"
          >
            0
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="botRadioTruthy"
            value="1"
            name="botRadioBoolean"
            className="peer inline appearance-none outline-none"
            checked={botBooleanValue === 1}
            onChange={(e) => setBotBooleanValue(e.target.value)}
          />
          <label
            htmlFor="botRadioTruthy"
            className="mr-2 flex h-full cursor-pointer items-center justify-center rounded-lg  bg-form-300 px-5 py-3 text-xs font-black text-form-700 outline-none transition-shadow duration-100 ease-in last-of-type:mr-0 hover:bg-form-400 peer-checked:bg-primary-50 peer-checked:text-primary-500 peer-focus:ring-4 peer-focus:ring-primary-300"
          >
            1
          </label>
        </div>
      </div>
    </div>
  );
};

BotFormsBooleanValue.propTypes = {
  className: PropTypes.string,
};

export default BotFormsBooleanValue;
