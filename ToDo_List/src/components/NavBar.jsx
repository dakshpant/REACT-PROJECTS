import React from 'react'


const NavBar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-indigo-700 text-white py-2'>
            <div className="logo">
                <span className='font-bold text-xl mx-8'> iTask</span>
            </div>
            <ul className="flex gap-8 mx-8">
                <li className='cursor-pointer hover:font-bold transition-all duration-300'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all duration-300'>Your Task</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar