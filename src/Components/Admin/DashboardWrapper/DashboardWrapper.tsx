
import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Sidebar from '../Sidebar/Sidebar'

interface innerProps {
  children: React.ReactNode
}

const DashboardWrapper: React.FC<innerProps> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return <div>
    {/* <div className='h-screen bg-opacity-0'></div> */}
    <div className='md:flex md:flex-row bg-slate-100'>
      <Sidebar isDrawerOpen={isDrawerOpen} />
      <div onClick={() => setIsDrawerOpen(false)} className={`${isDrawerOpen ? 'block' : 'hidden'} bg-gray-700 bg-opacity-50 absolute h-screen z-30 top-0 left-0 right-0 bottom-0`}></div>
      <div className='flex-1'>
        <NavBar barsCallback={() => {
          setIsDrawerOpen(!isDrawerOpen)
        }} />
        <div className='p-10'>
          {props.children}
        </div>
      </div>
    </div>
  </div>
}

export default DashboardWrapper