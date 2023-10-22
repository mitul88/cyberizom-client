import React from 'react'
import Sidenav from '../component/accountNavigation/Sidenav'
import Topbar from '../component/accountNavigation/Topbar'

const AccountRoot = () => {
  return (
    <div className='min-h-screen flex'>
        <Sidenav />
        <main className='w-full min-h-screen'>
            <Topbar />
        </main>
    </div>
  )
}

export default AccountRoot