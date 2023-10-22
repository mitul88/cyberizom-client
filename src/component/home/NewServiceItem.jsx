import { BsArrowRight } from "react-icons/bs";


const NewServiceItem = ({service}) => {
  return (
    <div className="rounded-lg w-[340px] h-[500px]">
        <img 
        src={service.img} 
        alt="" 
        className="rounded-t-lg w-full h-[250px]" 
        />
        <div className="border-b border-x border-gray-300 rounded-b-lg h-[250px] flex flex-col justify-between px-10 py-10">
            <p className="font-light">{service.desc}</p>
            <button className='w-full flex justify-between items-center text-lg text-red-400 font-bold'>{service.btnTxt}<BsArrowRight size={20} /></button>
        </div>
    </div>
  )
}

export default NewServiceItem