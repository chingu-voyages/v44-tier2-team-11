const BotDirection = () => {
  return (
    <div className="flex h-full flex-col">
      <label
        htmlFor="botDirection"
        className="mb-1 cursor-pointer self-start text-sm font-black text-form-900"
      >
        Bot Direction:
      </label>
      <select
        id="botDirection"
        defaultValue=""
        className="h-full cursor-pointer rounded-lg bg-form-300 px-4 text-sm font-bold text-form-700"
      >
        <option value="" disabled className="bg-white">
          -- Please Select --
        </option>
        <option className="bg-white" value="nort">
          North
        </option>
        <option className="bg-white" value="south">
          South
        </option>
        <option className="bg-white" value="west">
          West
        </option>
        <option className="bg-white" value="east">
          East
        </option>
      </select>
    </div>
  );
};

export default BotDirection;
