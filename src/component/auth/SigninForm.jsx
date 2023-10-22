import React from 'react'
import { Link } from 'react-router-dom'

const SigninForm = () => {
  return (
    <div className='bg-white border border-gray-200 rounded shadow-lg p-5 w-96 mx-auto'>
        <form>
            <div className='flex flex-col gap-1'>
                <label htmlFor="">Email Address</label>
                <input type="text" className='px-5 py-2 border-2 boder-gray-200 rounded shadow-sm' />
                <span className='text-xs'>Using SAML? Email address only, no password needed.</span>
            </div>
            <div className='mt-5 flex flex-col gap-1'>
                <label htmlFor="">Password</label>
                <input type="password" className='px-5 py-2 border-2 boder-gray-200 rounded shadow-sm' />
                <div className='flex justify-between items-center'><span className='text-xs flex items-center gap-1'><input type='checkbox' /> Remeber me for two weeks</span> <Link className='text-blue-600 text-xs font-semibold'>Forgot your password?</Link></div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
                <button type='submit' className='w-full bg-red-400 text-white px-5 py-2 font-bold rounded'>Sign in</button>
                <Link className='text-blue-600 font-semibold mx-auto'>Create a Cyberizom account</Link>
            </div>
        </form>
    </div>
  )
}

export default SigninForm