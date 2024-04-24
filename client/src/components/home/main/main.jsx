import { useTheme } from "../../../helpers/context";
import { Routes, Route} from 'react-router-dom';
import { AddMentor, AllInformation, MyAccount, UpdateMentor } from '../../';
import { SimpleFooter } from "../footer/footer";

const Main = ({data}) => {
  const { darkMode} = useTheme();
  return (
    <div className={ darkMode 
        ? "col-span-5 h-[100vh] overflow-auto bg-slate-700 p-8 " 
        : "col-span-5 h-[100vh] overflow-auto bg-neutral-100 p-8 "}
    >
      <Routes>
        <Route path='/' element={<AllInformation/>}/>
        <Route path='/add-mentor' element={<AddMentor/>}/>
        <Route path='/update-mentor' element={<UpdateMentor/>}/>
        <Route path='/my-account' element={<MyAccount/>}/>
      </Routes>
      <SimpleFooter/>
    </div>
  )
}

export default Main