import React from 'react'

const NavBar = () => {
  return (
    <div className='w-screen flex justify-center items-center gap-10 border-b-2 border-gray-400 py-8'>
        <h2 className=' text-2xl text-gray-500'>Messages</h2>
        <h2 className='font-semibold text-2xl'>Today's Tasks</h2>
        <h2 className=' text-2xl text-gray-500'>Last Activity</h2>
    </div>
  )
}

export default NavBar