import React, { useState } from 'react'
import AuthNavigation from './AuthNavigation'
import PageNavigation from './PageNavigation'

const MainNavigation = () => {
  const [enter, setEnter] = useState(false)

    const handleMouseEnter = () => {
        setEnter(false)
        console.log(enter)
    }
    const handleMouseLeave = () => {
        setEnter(true)
        console.log(enter)
    }
  return (
    <div className='sticky top-0 py-5 lg:px-56 bg-black text-white flex flex-col gap-5'>
        <AuthNavigation />
        <PageNavigation handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
    </div>
  )
}

export default MainNavigation