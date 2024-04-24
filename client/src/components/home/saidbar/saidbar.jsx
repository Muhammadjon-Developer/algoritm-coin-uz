import { LogoDark, User } from "../../../assets";
import { IoPower } from "react-icons/io5";
import { dataMenu } from "../../../constants/data";
import { useTheme } from "../../../helpers/context";
import { styles } from "../../../constants/styles";
import { Link } from "react-router-dom";

const Saidbar = () => {

  const { darkMode} = useTheme();

  let user = true;

  return (
      <div className={darkMode 
        ? "col-span-1 row-span-9 bg-slate-800 border-r border-slate-500 shadow-sm text-slate-200" 
        : "col-span-1 row-span-9 shadow-xl bg-white  text-slate-600"}>
        <div className={`${styles.flexCenter} h-[100px] w-full`}>
          <img src={LogoDark} alt="" className="object-contain h-[60px]"/>
        </div>

        {/* MENU */}
        <div className="py-8 px-4 h-[60%]">
          {
            dataMenu.map(item => (
            <Link to={item.link}  key={item.title}>
              <div className={darkMode ? `${styles.flexStart} gap-4 mb-4 hover:bg-slate-600 ${styles.roundedEl}` : `${styles.flexStart} gap-4 hover:bg-slate-300 p-2 ${styles.roundedEl}`}>
                {<item.icon/>}
                <p className="text-[12px]">{item.title}</p>
              </div>
            </Link>
            ))
          }
        </div>
        <div className="px-4">
          <div className="flex items-center justify-center gap-4 bg-indigo-700 rounded-md py-2">
            {user 
              ? <img src={User} alt="user" className="w-10 h-10 rounded-full object-cover"/>
              : <h2 className="w-10 h-10 rounded-full p-2 bg-slate-300 text-slate-800 font-bold">JS</h2>
            }
            <h3 className="text-white">John Smith</h3>
            <div className="text-white text-xl cursor-pointer">
            <IoPower/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Saidbar;