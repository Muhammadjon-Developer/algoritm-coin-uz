import {
  Card,
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
  Select, Option, 
  Spinner
} from "@material-tailwind/react";
import { CreateMentor } from "../../../assets";
import { useState } from "react";

const TABS = [
  {
    label: "Web programming",
    value: "web",
  },
  {
    label: "English language",
    value: "en",
  },
  {
    label: "Russin language",
    value: "ru",
  },
  {
    label: "Mathematics",
    value: "math",
  },
];

const AddMentor = () => {

  const [loader, setLoader] = useState(false);

  return (
    <div className="h-screen grid grid-cols-6 gap-4">
      <div className="col-span-3 border-[1px] border-slate-400 h-[200px] p-4 rounded-md">
        <h1 className="mb-2 text-slate-200 font-semibold text-2xl">
          ADD MENTOR
        </h1>
        <p className="text-slate-200 mb-8">
          Siz qaysi bo'limga o'qituvchi qo'shmoqchisiz? quyidagi menyulardan
          birini tanlang,
        </p>
        <div className="w-72">
          <Select label="Select Version" className="text-white">
            {TABS.map(item => (
              <Option key={item.value}>{item.label}</Option>
            ))}
          </Select>
        </div>
        <div className=" mb-1 flex flex-col gap-6">
             <img src={CreateMentor} alt="create mentor" className="object-cover w-ful h-ful"/>
            </div>
      </div>
      <div className="col-span-3 border-[1px] border-slate-400 h-auto px-4 py-4 rounded-md">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white">
            Create a Mentor
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Nice to meet you! Enter mentor details to creating.
          </Typography>
          <form className="flex flex-col mt-4 mb-2 w-full gap-6 text-slate-200">
            <div className="grid grid-cols-2 items-start mb-1 gap-4">
            <Typography variant="h6" className="-mb-3">
                Username *
              </Typography>
              <Input
                size="lg"
                placeholder="Mr.Developer"
                className=" !border-t-blue-gray-200 focus:!border-indigo-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" className="-mb-3">
                Firstname *
              </Typography>
              <Input
                size="lg"
                placeholder="Mr.John"
                className=" !border-t-blue-gray-200 focus:!border-indigo-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" className="-mb-3">
                Lastname *
              </Typography>
              <Input
                size="lg"
                placeholder="Smith"
                className=" !border-t-blue-gray-200 focus:!border-indigo-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              
              <Typography variant="h6" className="-mb-3">
                Phone Number *
              </Typography>
              <Input
                size="lg"
                placeholder="( +99890 ) 777 77 77"
                className=" !border-t-blue-gray-200 focus:!border-indigo-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" className="-mb-3">
                Status *
              </Typography>
              <Popover placement="bottom">
                <PopoverHandler>
                  <Button className="!border-t-blue-gray-200 hover:outline bg-transparent border">Select Status</Button>
                </PopoverHandler>
                <PopoverContent className="bg-gray-200 border-none">
                <Select label="Select Version" size="lg" className="text-gray-700">
                  <Option>Mentor</Option>
                </Select>
                </PopoverContent>
              </Popover>
              
               <Button variant="outlined" className="text-white bg-indigo-500 !border-blue-gray-200 flex items-center justify-center w-48 mt-8">{loader ? <Spinner/> : "Create a mentor"}</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddMentor;
