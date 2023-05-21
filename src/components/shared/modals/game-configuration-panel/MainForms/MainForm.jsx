import MainFormOperation from './MainFormOperation.jsx';
import MainFormSpeed from './MainFormSpeed.jsx';
import MainFormBotList from './MainFormBotList.jsx';
import FadedButton from '../../../../base/FadedButton.jsx';
import FilledButton from '../../../../base/FilledButton.jsx';

// NPM
import PropTypes from 'prop-types';

const MainForm = ({ onClickShowForm }) => {
  return (
    <>
      <h2 className="relative mb-12 inline-block text-xl font-black text-primary-900 before:absolute before:-bottom-2 before:left-0 before:block before:h-1 before:w-3/5 before:rounded-lg before:bg-primary-900">
        Configurations
      </h2>
      <div className="mb-6">
        <MainFormOperation />
      </div>
      <div className="mb-6">
        <MainFormSpeed />
      </div>
      <div>
        <span className="mb-2 inline-block text-sm font-black text-form-900">
          Your Bots:
        </span>
        <MainFormBotList onClickShowForm={onClickShowForm} />
      </div>
      <div className="mt-6 flex justify-end">
        <FadedButton>Reset</FadedButton>
        <FilledButton>Save</FilledButton>
      </div>
    </>
  );
};

MainForm.propTypes = {
  onClickShowForm: PropTypes.func.isRequired,
};
export default MainForm;
