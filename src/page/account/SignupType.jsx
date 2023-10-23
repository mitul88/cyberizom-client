import React from 'react'
import { Link } from 'react-router-dom'
import { TbTargetArrow } from "react-icons/tb";

const SignupTypePage = () => {
  return (
    <div className='h-full'>
        <h4 className="text-3xl text-center font-semibold mt-10 mb-3">Welcome to Cyberizom</h4>
        <h4 className="text-sm text-center mb-10">Please tell us a bit about yourself</h4>
        <div className="flex gap-5 mx-auto w-fit">
            <Link className="w-72 h-60 bg-white border-2 border-gray-300 rounded flex flex-col items-center justify-center gap-1 px-5">
                <div className="rounded-full border-4 border-black p-1 text-black">
                    <TbTargetArrow size={30} />
                </div>
                <h4 className="text-lg text-blue-600 font-semibold">I am a Hacker</h4>
                <p className='text-center text-sm'>I want to use my skills to help make the internet a safer place.</p>
            </Link>
            <Link className="w-72 h-60 bg-white border-2 border-gray-300 rounded"></Link>
        </div>
        
    </div>
  )
}

export default SignupTypePage