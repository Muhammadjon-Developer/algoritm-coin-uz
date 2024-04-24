import { styles } from "../../../constants/styles";
import { GiTwoCoins } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {

  return (
    <div className={`h-screen ${styles.flexCenter} bg-sky-400`}>
      <div className="w-[465px] h-[545px] bg-white rounded-lg shadow-lg p-[6px]">
        <div className="border-4 border-sky-400 h-full rounded-md">
          <div className={`${styles.flexCenter} gap-2 text-3xl font-semibold text-indigo-800 my-10`}>
            <GiTwoCoins />
            <h2>Algoritm-coin.uz</h2>
          </div>
          <h2 className="text-2xl text-sky-700 text-center my-4">Sign in</h2>
          <form className={`h-[50%] flex items-start flex-col gap-4 px-10 py-4`}>
            <input 
              name="username" 
              type="text" 
              placeholder="Username" 
              className="shadow-sm  w-full h-10 rounded-sm border border-slate-300 outline-sky-400 px-4"/>
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              className="shadow-sm  w-full h-10 rounded-sm border border-slate-300 outline-sky-400 px-4"/>
            <div className="flex items-center gap-2">
              <input 
                name="remember" 
                type="checkbox" />
                <p>Remeber me</p>
            </div>
            <button type="button" className="shadow-sm  bg-green-500 w-full h-10 rounded-sm text-white font-semibold">Login</button>
            <div className={`${styles.flexCenter} gap-2 hover:underline cursor-pointer text-slate-600`}><RiLockPasswordFill  className="text-2xl"/> <p>Forgot your password ?</p></div>
          </form>

          <div className="flex items-center justify-center gap-4 px-10 mt-5">
            <div className="cursor-pointer hover:scale-500 w-[50%] shadow-sm flex items-center justify-center gap-2 rounded-md p-2 border-2 border-red-500">
              <FcGoogle className="text-2xl"/>
              <p>Google+</p>
            </div>
            <div className="cursor-pointer hover:scale-500 w-[50%] shadow-sm flex items-center justify-center gap-2 rounded-md p-2 border-2 border-slate-900">
              <FaGithub className="text-2xl"/>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;