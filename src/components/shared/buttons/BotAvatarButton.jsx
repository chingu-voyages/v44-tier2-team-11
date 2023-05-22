import PropTypes from 'prop-types';
import BotDynamic from '../bots/BotDynamic.jsx';

const BotAvatarButton = ({
  onClick,
  name,
  border,
  background,
  base,
  stroke,
}) => {
  return (
    <button
      data-name={name}
      type="button"
      style={{
        borderColor: border,
        backgroundColor: background,
      }}
      className={`mr-3 h-[60px] w-[70px] rounded-xl border-[3px] p-3`}
      onClick={onClick}
    >
      <BotDynamic
        baseColor={base}
        strokeColor={stroke}
        className={'block h-full w-full'}
      />
    </button>
  );
};

BotAvatarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};
export default BotAvatarButton;
