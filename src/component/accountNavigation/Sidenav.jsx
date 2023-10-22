import React, { useEffect, useState } from 'react';
import { LuActivitySquare } from "react-icons/lu";
import { HiOutlineChartBar } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Sidenav = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const handleCollapse = (condition) => {
        setIsCollapsed(condition)
    }

  return (
    <div onMouseEnter={()=>handleCollapse(false)} onMouseLeave={()=>handleCollapse(true)} className={`min-h-full ${isCollapsed ? 'w-[60px]' :' w-[250px] rounded-r-lg' } bg-black text-white flex flex-col`}>
        <Link to="/" className={`p-3 flex ${isCollapsed ?"flex-col justify-center": null} items-center text-2xl border-b border-gray-400`}>{isCollapsed? "C" : "Cyberizom"}</Link>
        <div className={`${isCollapsed ? 'p-5' : 'p-2'} flex flex-col justify-center items-center`}>{isCollapsed? (<LuActivitySquare  size={30}/>) : (<button className='w-full rounded-full font-semibold p-3 hover:bg-gray-800 flex gap-5 items-center cursor-pointer'><LuActivitySquare size={30} />Hacktivity</button>)}</div>
        <div className={`${isCollapsed ? 'p-5' : 'p-2'} flex flex-col justify-center items-center`}>{isCollapsed? (<BiTargetLock size={30}/>) : (<button className='w-full rounded-full font-semibold p-3 hover:bg-gray-800 flex gap-5 items-center cursor-pointer'><BiTargetLock size={30} />Opportunities</button>)}</div>
        <div className={`${isCollapsed ? 'p-5' : 'p-2'} flex flex-col justify-center items-center`}>{isCollapsed? (<BsClipboardCheck  size={30}/>) : (<button className='w-full rounded-full font-semibold p-3 hover:bg-gray-800 flex gap-5 items-center cursor-pointer'><BsClipboardCheck size={30} />Directory</button>)}</div>
        <div className={`${isCollapsed ? 'p-5' : 'p-2'} flex flex-col justify-center items-center`}>{isCollapsed? (<HiOutlineChartBar  size={30}/>) : (<button className='w-full rounded-full font-semibold p-3 hover:bg-gray-800 flex gap-5 items-center cursor-pointer'><HiOutlineChartBar size={30} />Leaderboard</button>)}</div>
    </div>
  )
}

export default Sidenav