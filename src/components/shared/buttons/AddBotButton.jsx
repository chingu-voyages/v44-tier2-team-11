import PlusIcon from '../icons/PlusIcon.jsx';
import PropTypes from 'prop-types';
const AddBotButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="h-[60px] w-[70px] rounded-xl bg-form-400 p-5 hover:bg-form-500/50 focus:bg-form-500/50"
      onClick={onClick}
    >
      <PlusIcon className="block h-full w-full fill-form-600" />
    </button>
  );
};

AddBotButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddBotButton;
