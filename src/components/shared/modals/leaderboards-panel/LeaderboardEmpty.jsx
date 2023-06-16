import BotDynamic from '../../bots/BotDynamic.jsx';
const LeaderboardEmpty = () => {
  return (
    <div className="flex-direction flex flex-col items-center">
      <span className="mb-2 mt-6 block max-w-[80px]">
        <BotDynamic baseColor="#ddebff" strokeColor="#8fa4c2" />
      </span>
      <h2 className="text-lg font-black text-slate-600">
        Uh-oh! Not Bots Yet!
      </h2>
      <p className="mb-2 text-sm font-semibold text-slate-500">
        You are welcome to create bots. You can have a minimum of two bots and a
        maximum of four bots for combat
      </p>
    </div>
  );
};

export default LeaderboardEmpty;
