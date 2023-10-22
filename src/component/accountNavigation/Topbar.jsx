import { PiWarningCircleLight } from "react-icons/pi";

const Topbar = () => {
  return (
    <div className='bg-blue-200 w-full h-[60px] p-5 flex flex-col justify-center items-center'>
        <span className="text-blue-800 flex gap-3 items-center justify-center"><PiWarningCircleLight size={40} /> Learn more about cyberizom</span>
    </div>
  )
}

export default Topbar