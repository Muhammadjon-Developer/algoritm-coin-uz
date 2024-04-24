import { Button } from '@material-tailwind/react'

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

  return (
    <div className="h-screen grid grid-cols-6 gap-4">
      <div className="col-span-2 border-[1px] border-slate-400 h-[400px] p-4 rounded-md">
        <h1 className="mb-4 text-slate-200 font-semibold text-2xl">ADD MENTOR</h1>
        <p className="text-slate-200 mb-4">Siz qaysi bo'limga o'qituvchi qo'shmoqchisiz? quyidagi menyulardan birini tanlang,</p>
        <div className="flex flex-col gap-4">
          {TABS.map(item => (
            <Button variant="outlined" className='text-slate-200 border-slate-400 bg-slate-600'>{item.label}</Button> 
          ))}
        </div>
      </div>
      <div className="col-span-4 border-[1px] border-slate-400 h-[80%] px-4 py-8">
        
      </div>
    </div>
  );
}

export default AddMentor;