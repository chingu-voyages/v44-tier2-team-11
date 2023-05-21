import BotColorScheme from "./BotColorScheme.jsx";
import BotName from './BotName.jsx';
import BotBooleanValue from './BotBooleanValue.jsx';
import BotDirection from './BotDirection.jsx';

const BotForms = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <BotColorScheme />
      </div>
      <div className="mb-4 max-w-sm">
        <BotName />
      </div>
      <div className="mb-4 mr-10">
        <BotBooleanValue />
      </div>
      <div className="max-w-sm">
        <BotDirection />
      </div>

        <div className="mt-6 flex justify-end">
            <button
                type="button"
                className="mr-2 rounded-lg bg-primary-100 px-4 py-3 text-sm font-black text-primary-500 outline-none transition-shadow duration-100 ease-in hover:bg-primary-200/60 focus:bg-primary-200/60 focus:ring-4 focus:ring-primary-300 "
            >
                Reset
            </button>
            <button
                type="button"
                className="rounded-lg bg-primary-500 px-4 py-3 text-sm font-black text-white outline-none transition-shadow duration-100 ease-in hover:bg-primary-600/80 focus:bg-primary-600/80 focus:ring-4 focus:ring-primary-300"
            >
                Create Bot
            </button>
        </div>
    </div>
  );
};

export default BotForms;
