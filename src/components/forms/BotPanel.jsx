import BotName from './BotName';
import BotBooleanValue from './BotBooleanValue';
import BotDirection from './BotDirection';

const BotPanel = () => {
  return (
    <div className="flex">
      <div className="mr-10 w-2/5">
        <BotName />
      </div>
      <div className="mr-10">
        <BotBooleanValue />
      </div>
      <div>
        <BotDirection />
      </div>
    </div>
  );
};

export default BotPanel;
