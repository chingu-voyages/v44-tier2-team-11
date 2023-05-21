import BotDynamic from "../../../bots/BotDynamic.jsx";
import PlusIcon from "../../../icons/PlusIcon.jsx";


const BotList = ()=>{
    return (
      <div>
          <button type='button' className='w-[70px] mr-3 h-[60px] px-2 py-3 rounded-xl bg-form-400 border-[3px] border-form-500'>
              <BotDynamic baseColor='#A9C6D5' strokeColor='#4B7F9B' className={'block w-full h-full'}/>
          </button>
          <button type='button' className='w-[70px] h-[60px] px-2 py-3 rounded-xl bg-form-400 hover:bg-form-500/50 focus:bg-form-500/50'>
              <PlusIcon className='block fill-form-600 w-full h-full'/>
          </button>
      </div>
    );
}

export default BotList;
