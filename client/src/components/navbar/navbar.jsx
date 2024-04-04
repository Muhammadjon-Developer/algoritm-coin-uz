import { User } from "../../assets";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxMoon } from "react-icons/rx";
import { useTheme } from "../../helpers/dark-mode";


const Navbar = () => {
const {darkMode, toggleDarkMode} = useTheme()

  return (
    <div className={ darkMode
      ? 'col-span-5 px-4 flex items-center justify-between bg-slate-800 h-[60px] text-white border-b border-slate-500 shadow-sm'
      : 'col-span-5 px-4 flex items-center justify-between bg-white text-slate-700 h-[60px]'}>
        <div className='left flex items-center justify-start gap-8'>
          <div className='menu-icon text-2xl cursor-pointer'>
            <IoIosMenu />
          </div>
          <div className='search flex items-center justify-between gap-2 h-[35px] border rounded-md border-slate-400'>
            <input type="text" placeholder='Search...' className='bg-transparent h-full px-2 outline-none'/>
            <div className="text-xl cursor-pointer p-1 h-full bg-slate-400 rounded-r">
              <IoIosSearch/>
            </div>
          </div>
        </div>
        <div className="right flex items-center justify-around gap-4">
          <div className="manu-icon flex text-xl cursor-pointer" onclick={toggleDarkMode}>
            {darkMode ? <MdOutlineWbSunny /> : <RxMoon />}
          </div>
          {/* user image */}
          <div className="flex items-center justify-center h-10 w-10">
            <img src={User} alt="logo" className='object-cover w-10 h-10 rounded-full'/>
          </div>
        </div>
    </div>
  )
}

export default Navbar