import React from 'react'
import Sidenav from '../component/accountNavigation/Sidenav'
import Topbar from '../component/accountNavigation/Topbar'
import { Outlet } from 'react-router-dom'

const AccountRoot = () => {
  return (
    <div className='flex bg-gray-100'>
        <Sidenav />
        <div className='w-full min-h-screen relative'>
            <Topbar />
            <div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default AccountRoot