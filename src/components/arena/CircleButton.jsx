import LogoIcon from './components/icons/LogoIcon'

const CircleButton = ({ icon }) => {
  return (
    <button className="bg-red-400 rounded-full p-2">
      {icon}
    </button>
  );
};

export default CircleButton;
