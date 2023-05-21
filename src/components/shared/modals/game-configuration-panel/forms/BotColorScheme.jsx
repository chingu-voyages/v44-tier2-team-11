import DiceFiveIcon from '../../../icons/DiceFiveIcon.jsx';

const BotColorScheme = ()=>{
    return (
        <div>
            <button type='button' className='bg-form-200 group focus:ring-4 focus:ring-primary-300 focus:bg-primary-100 hover:bg-primary-100 rounded-lg px-4 ease-linear duration-100 py-2 flex'>
                <span className='w-4 flex mr-2'>
                    <DiceFiveIcon className='block fill-form-600 group-hover:fill-primary-500 group-focus:fill-primary-500 w-full h-full'/>
                </span>

                <span className='text-form-600 group-hover:text-primary-500 group-focus:text-primary-500 font-bold text-md'>Generate Color Scheme</span>
            </button>
        </div>
    );
}

export default BotColorScheme;
