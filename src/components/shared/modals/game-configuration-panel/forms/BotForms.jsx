import BotName from './BotName.jsx';
import BotBooleanValue from './BotBooleanValue.jsx';
import BotDirection from './BotDirection.jsx';

const BotForms = () => {
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

export default BotForms;
