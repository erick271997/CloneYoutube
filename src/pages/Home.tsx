import React from 'react'
import Navbar from '../componets/Navbar'
import Sidebar from '../Sidebar'

function Home() {
  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{height:'9.5vh'}}>
        <Navbar/>
      </div>
     <div className='flex' style={{height:'92.5vh'}}>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home