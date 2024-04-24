import { Typography } from "@material-tailwind/react";
import { useTheme } from "../../../helpers/context";
 
export function SimpleFooter() {

  const {darkMode} = useTheme();

  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between my-10">
      <Typography  className={darkMode ? "text-slate-200": "text-slate-700"} >
        &copy; 2024 algoritm-coin.uz
      </Typography>
      <ul className={darkMode ? "flex flex-wrap items-center gap-y-2 gap-x-8 text-slate-200": "flex flex-wrap items-center gap-y-2 gap-x-8 text-slate-700"}>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-color hover:text-blue-500 focus:text-blue-500"
          >
            All Information
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Add Mentor
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Update Mentor
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            My account
          </Typography>
        </li>
      </ul>
    </footer>
  );
}