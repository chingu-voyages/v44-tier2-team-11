import BotName from './BotName';
import BotBooleanValue from './BotBooleanValue';
import BotDirection from './BotDirection';

const BotPanel = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 max-w-sm">
        <BotName />
      </div>
      <div className="mb-4 mr-10">
        <BotBooleanValue />
      </div>
      <div className="max-w-sm">
        <BotDirection />
      </div>
    </div>
  );
};

export default BotPanel;
