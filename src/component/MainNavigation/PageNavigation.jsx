import React, { useState } from 'react'

const PageNavigation = ({handleMouseEnter, handleMouseLeave}) => {
    
  return (
    <div className='container mx-auto flex justify-between items-center'>
        <div className='text-4xl font-bold'>Cyberizom</div>
        <nav className='flex gap-10 uppercase font-bold text-sm'>
            <button onMouseEnter={()=>handleMouseEnter()} onMouseLeave={()=>handleMouseLeave()} className='hover:text-red-500 ease-out duration-300'>Platform</button>
            <button className='hover:text-red-400 ease-out duration-300'>Solutions</button>
            <button className='hover:text-red-400 ease-out duration-300'>Partners</button>
            <button className='hover:text-red-400 ease-out duration-300'>Company</button>
            <button className='hover:text-red-400 ease-out duration-300'>Hackers</button>
            <button className='hover:text-red-400 ease-out duration-300'>Resources</button>
        </nav>
    </div>
  )
}

export default PageNavigation