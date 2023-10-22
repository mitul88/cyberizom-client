import React from 'react'
import Sidenav from '../component/accountNavigation/Sidenav'
import Topbar from '../component/accountNavigation/Topbar'
import { Outlet } from 'react-router-dom'

const AccountRoot = () => {
  return (
    <div className='min-h-screen flex'>
        <Sidenav />
        <div className='w-full min-h-screen'>
            <Topbar />
            <div className='min-h-full bg-gray-100'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default AccountRoot