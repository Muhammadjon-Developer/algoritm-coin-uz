import { useTheme } from "../../../helpers/dark-mode"
import {Routes, Route} from 'react-router-dom'
import {AddMentor, AllInformation, MyAccount, UpdateMentor} from '../../'

const Main = () => {
  const { darkMode} = useTheme();
  return (
    <div className={ darkMode 
        ? "col-span-5 h-screen bg-slate-700 p-8" 
        : "col-span-5 h-screen bg-neutral-100 p-8"}
    >
      <Routes>
        <Route path='/all-information' element={<AllInformation/>}/>
        <Route path='/add-mentor' element={<AddMentor/>}/>
        <Route path='/update-mentor' element={<UpdateMentor/>}/>
        <Route path='/my-account' element={<MyAccount/>}/>
      </Routes>
    </div>
  )
}

export default Main;