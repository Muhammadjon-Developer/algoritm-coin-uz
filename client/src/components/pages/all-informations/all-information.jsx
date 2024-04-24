import { BiCategory } from "react-icons/bi";
import { cards, categories } from "../../../constants/data";
import MentorInfo from "./mentor-info";
import PupilInfo from "./pupil-info";
import Diagramma from "./diagramma";
import MentorDiagramma from "./mentor-diagramma";
import { CarouselCard } from "./cards";

const AllInformation = () => {

  return (
    <div className="grid grid-cols-4  gap-10">
      <div className="card col-span-4 h-40 flex items-center justify-between">
        { cards.map(item => (
          <div className="bg-white h-full w-[280px] rounded-lg p-4">
            <div className="flex items-center justify-between mb-16">
              <h1 className="text-2xl font-semibold text-slate-500">{item.title}</h1>
              {<item.icon className="text-3xl text-slate-500"/>}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-600">125 </h3>
              <p className="text-slate-500">04/09/2024</p>
            </div>
          </div>
        ))}
        <CarouselCard/>
      </div>
      <MentorDiagramma/>
      <Diagramma/>
      <MentorInfo />
      <PupilInfo/>
    </div>
  );
}

export default AllInformation;