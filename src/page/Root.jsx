import React from 'react'
import MainNavigation from '../component/MainNavigation/MainNavigationContainer'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <div className='min-h-screen'>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootPage