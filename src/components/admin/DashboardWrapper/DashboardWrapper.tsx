
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
      <div className='flex-1'>
        <NavBar barsCallback={() => {
          setIsDrawerOpen(!isDrawerOpen)
        }} />
        <div className='p-10' onClick={() => setIsDrawerOpen(false)}>
          {props.children}
        </div>
      </div>
    </div>
  </div>
}

export default DashboardWrapper