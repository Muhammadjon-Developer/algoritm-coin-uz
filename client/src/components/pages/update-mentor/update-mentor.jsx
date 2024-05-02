import React from "react";
import {
  Card,
  Typography,
  Input,
  IconButton,
  Tooltip,
  Avatar,
  Button,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../../../helpers/context";
import { UpdatePage } from "../../../assets/";

const TABLE_HEAD = ["UserName", "Phone Number", "Date", "Edits", "Deleted"];

const UpdateMentor = () => {
  const mentorInfo = true;

  const { handleSearch } = useTheme();

  return (
    <div className="grid grid-cols-6 grid-rows-10 h-screen gap-4">
      <div className="col-span-6 row-span-1">
        <div className="w-[350px]">
          <Input
            color="white"
            label="Search mentor..."
            icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-100" />}
            className="text-gray-100 out"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="col-span-3 row-span-9">
        <MentorsTable />
      </div>
      <div className="col-span-3 row-span-7 border-[1px] border-gray-300 rounded-lg ">
        {mentorInfo ? (
          <div className="rounded-lg w-full h-full flex items-center justify-start pt-10 flex-col gap-4">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xxl"
            />
            <form className="flex flex-col gap-2">
              <div className="w-72 flex flex-col items-center gap-4">
                <Input
                  label="Fullname"
                  value={"Abdushoxid Bannayev"}
                  color="white"
                />
                <Input
                  label="Phone Number"
                  value={"+99890 122 0000"}
                  color="white"
                />
              </div>
              <div className="w-72 flex justify-between mt-4">
                <Button variant="gradient">cancel</Button>
                <Button color="indigo">save</Button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="p-10 text-white tracking-wide text-xl">
              Ma'lumotlarini o'zgartirmoqchi bo'lgan Mentorni tanlang
            </h2>
            <img
              src={UpdatePage}
              alt="update image"
              className="object-cover w-96 h-96 ml-10"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateMentor;

function MentorsTable() {
  const { filteredData } = useTheme();

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map(({ username, phoneNumber, createdAt }, index) => (
            <tr key={username} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {username}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {phoneNumber}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {createdAt}
                </Typography>
              </td>
              <td className="p-4">
                <Tooltip content="Edit User">
                  <IconButton variant="text">
                    <PencilIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
              <td className="p-4">
                <Tooltip content="Edit User">
                  <IconButton variant="text">
                    <TrashIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
