import { mentors } from "../../../constants/data"

const MentorInfo = () => {
  return (
    <div className="h-[66vh] col-span-2 bg-slate-600 p-4 rounded-lg flex flex-col gap-4 overflow-y-auto">
      <h1 className="flex items-center gap-1 text-slate-200">Mentors / <p>Web-dasturlash</p></h1>
      { mentors.map(item => (
        <div className="flex items-center justify-between p-2 rounded-lg bg-white shadow-md">
          <h2 className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white font-semibold">
            {item.username.split(' ')[0].slice(0,1) +
             item.username.split(' ')[1].slice(0,1)}
          </h2>
          <h3 className="mr-[60px]">{item.username}</h3>
          <h4>{item.phoneNumber}</h4>
          <p>{item.createdAt}</p>
        </div>
      ))}
    </div>
  )
}

export default MentorInfo