import PropTypes from 'prop-types';

const BotFormsSuccessAlert = ({ canShow }) => {
  if (!canShow) {
    return <></>;
  }

  return (
    <p className="mx-auto mb-4 w-full max-w-[350px] rounded-lg bg-emerald-500 py-3 text-center text-sm font-bold text-white">
      You have successfully created a bot!
    </p>
  );
};

BotFormsSuccessAlert.propTypes = {
  canShow: PropTypes.bool,
};
export default BotFormsSuccessAlert;
