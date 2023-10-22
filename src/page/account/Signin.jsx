import React from 'react'
import SigninForm from '../../component/auth/SigninForm'

const Signin = () => {
  return (
    <div className='h-full'>
        <h4 className="text-3xl text-center font-semibold mb-10">Sign in to Cyberizom</h4>
        <SigninForm />
    </div>
  )
}

export default Signin