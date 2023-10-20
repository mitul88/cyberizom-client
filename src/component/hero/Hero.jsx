import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black text-white w-full flex justify-start lg:px-56 pt-10 pb-20'>
        <div className="flex flex-col gap-10">
            <h1 className="text-5xl font-bold">
                One Platform. <br />
                Primitive Security. <br />
                Delivered. <br />
            </h1>
            <p className="text-xl font-bold md:w-96">
            Outmatch cybercriminals with a legion of ethical hackers who work for you to continuously protect your attack surface.
            </p>
            <div className="flex gap-10 items-center">
                <button className="flex items-center rounded bg-blue-600 px-8 py-3 font-bold border-2 border-gray-400 hover:border-blue-800 hover:bg-blue-800 ease-out duration-300">Explore the platform</button>
                <button className="flex items-center rounded px-8 py-2 font-bold border-2 border-gray-400 hover:border-white ease-out duration-300">Request a demo</button>
            </div>
        </div>
    </div>
  )
}

export default Hero