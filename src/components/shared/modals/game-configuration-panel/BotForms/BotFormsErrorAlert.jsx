import PropTypes from 'prop-types';

const BotFormsErrorAlert = ({ alertText }) => {
  if (alertText === '') {
    return <></>;
  }

  return (
    <p className="mx-auto mb-4 w-full max-w-[350px] rounded-lg bg-primary-500 py-3 text-center text-sm font-bold text-white">
      {alertText}
    </p>
  );
};

BotFormsErrorAlert.propTypes = {
  alertText: PropTypes.string,
};
export default BotFormsErrorAlert;
