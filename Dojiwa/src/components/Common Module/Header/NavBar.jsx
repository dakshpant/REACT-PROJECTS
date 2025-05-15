import React from 'react'
import Logo from '../../../assets/images/Logo.png'
import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <>
    <div 
    className='px-12 '> 
      <div className='bg-[#242424] md:p-8 md:py-7 rounded-xl flex items-center md:justify-between sm:p-5 sm:py-4 sm:justify-between'>
        <div className=''>
          <NavLink to={'/'}><img 
          className='sm:h-[35px] '
          width={90}
          height={34}
          src={Logo} 
          alt="dojiwaLogo" />
          </NavLink>
        </div>
        <div className=''>
          <ul className='text-white sm:text-[14px] md:text-[16px] flex items-center justify-evenly md:items-center md:gap-5 sm:gap-2'>
            <li className='hover:text-orange-400 transition-all duration-300'> <NavLink
            to={'/about'}>About Us</NavLink></li>
            <li className='hover:text-orange-400 transition-all duration-300'><NavLink to={'/projectLibrary'}>Project Library</NavLink></li>
            <li className='hover:text-orange-400 transition-all duration-300'><NavLink to={'/blog'}>Blog</NavLink></li>
            <li className='hover:text-orange-400 transition-all duration-300'><NavLink to={'/contactUs'}>Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar