import { BiCategory } from "react-icons/bi";
import { cards, categories } from "../../../constants/data";
import MentorInfo from "./mentor-info";
import PupilInfo from "./pupil-info";
import Diagramma from "./diagramma";
import MentorDiagramma from "./mentor-diagramma";
import  CarouselCard  from "./cards";
import StatisticsCard from "./statistics-card";
import { memo } from "react";

const AllInformation = () => {

  return (
    <div className="grid grid-cols-4  gap-10">
      <div className="card col-span-4 h-40 flex items-center justify-between">
        <StatisticsCard/>
        <CarouselCard/>
      </div>
      <MentorDiagramma/>
      <Diagramma/>
      <MentorInfo />
      <PupilInfo/>
    </div>
  );
}

export default memo(AllInformation);