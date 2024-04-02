import React, { useState } from 'react'
import { Logo, User } from '../../assets'
import { IoIosMenu,  IoIosSearch } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxMoon } from "react-icons/rx";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(true)

  const handleDarkMode = () => {
    setDarkMode(dark => !dark)
  }

  return (
    <div className='flex item-center justify-between pr-4 bg-slate-700 h-[70px] text-white'>
      <div className="left flex items-center justify-start gap-8">
        <div className='flex items-center justify-center h-full w-[100px] bg-amber-300'>
          <img src={Logo} alt="logo" className='object-cover w-full h-[70px]' />
        </div>
        <div className='menu-icon text-3xl cursor-pointer'>
          <IoIosMenu />
        </div>
        <div className='search flex items-center justify-between gap-2 border rounded-md border-slate-400'>
          <input type="text" placeholder='Search...' className='bg-transparent p-2 outline-none'/>
          <div className='text-2xl cursor-pointer p-2 bg-slate-400 rounded-r'>
          <IoIosSearch/>
          </div>
        </div>
      </div>
      <div className="right flex items-center justify-around gap-4">
        <div className='menu-icon text-white flex text-2xl cursor-pointer' onClick={handleDarkMode}>
          {darkMode ? <MdOutlineWbSunny /> : <RxMoon/>}
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={User} alt="logo" className='object-cover w-10 h-10 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;