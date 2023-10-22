import React from 'react'

const NewServiceItem = ({service}) => {
  return (
    <div className="rounded-lg w-[340px] h-[500px]">
        <img 
        src={service.img} 
        alt="" 
        className="rounded-t-lg w-full h-[250px]" 
        />
        <div className="border-b border-x border-gray-300 rounded-b-lg h-[250px] flex flex-col">

        </div>
    </div>
  )
}

export default NewServiceItem