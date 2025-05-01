import React from 'react'
import Logo from '../../../assets/images/Logo.png'
import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <>
    <div 
    className='px-12 z-50'> 
      <div className='bg-[#242424] p-8 py-7 rounded-xl flex justify-between'>
        <div className=''>
          <img 
          className=''
          width={90}
          height={34}
          src={Logo} 
          alt="dojiwaLogo" />
        </div>
        <div className=''>
          <ul className='text-white font-[16px] flex justify-evenly items-center gap-5 '>
            <li className='hover:text-orange-400 transition-all duration-300'> <NavLink>About Us</NavLink></li>
            <li className='hover:text-orange-400 transition-all duration-300'><NavLink>Project Library</NavLink></li>
            <li className='hover:text-orange-400 transition-all duration-300'><NavLink>Blog</NavLink></li>
            <li className='hover:text-orange-400 transition-all duration-300'><NavLink>Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar