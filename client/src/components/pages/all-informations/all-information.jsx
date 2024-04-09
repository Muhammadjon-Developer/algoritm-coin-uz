import { BiCategory } from "react-icons/bi";
import { cards, categories } from "../../../constants/data";
import MentorInfo from "./mentor-info";
import PupilInfo from "./pupil-info";

const AllInformation = () => {

  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="card col-span-4 h-40 flex items-center justify-between">
        {cards.map(item => (
          <div className="bg-white h-full w-[335px] rounded-lg p-4">
            <div className="flex items-center justify-between mb-16">
              <h1 className="text-2xl font-semibold text-slate-500">{item.title}</h1>
              {<item.icon className="text-3xl text-slate-500" />}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-600">125 </h3>
              <p className="text-slate-500">04/09/2024</p>
            </div>
          </div>
        ))}
        <div className="bg-white h-full w-[500px] rounded-lg p-4">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-2xl font-semibold text-slate-500">Categories</h1>
            <BiCategory className="text-3xl text-slate-500 " />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            {categories.map(item => (
              <h3
                key={item.title}
                className="px-2 py-1 hover:bg-slate-600 hover:text-white rounded-sm flex items-center justify-between cursor-pointer">
                <p>{item.title}</p>
                {<item.icon />}
              </h3>
            ))}
          </div>
        </div>
      </div>
      <MentorInfo />
      <PupilInfo />
      <div className="col-span-4 h-20 mb-10 bg-white rounded-md"></div>
    </div>
  );
}

export default AllInformation;