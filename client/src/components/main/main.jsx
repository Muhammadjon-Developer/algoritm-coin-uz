import React from 'react';
import { useTheme } from './../../helpers/dark-mode';

const Main = () => {
  const {darkMode} = useTheme()
  return (
    <div className={darkMode
      ? 'col-span-5 h-screen bg-slate-700 p-8'
      : 'col-span-5 h-screen bg-neutral-100'
    }>
      Main
    </div>
  )
}

export default Main;