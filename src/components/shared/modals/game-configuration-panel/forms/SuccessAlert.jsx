import PropTypes from 'prop-types';

const SuccessAlert = ({ canShow }) => {
  if (!canShow) {
    return <></>;
  }

  return (
    <p className="mx-auto mb-4 w-full max-w-[350px] rounded-lg bg-emerald-500 py-3 text-center text-sm font-bold text-white">
      You have successfully created a bot!
    </p>
  );
};

SuccessAlert.propTypes = {
  canShow: PropTypes.bool,
};
export default SuccessAlert;
