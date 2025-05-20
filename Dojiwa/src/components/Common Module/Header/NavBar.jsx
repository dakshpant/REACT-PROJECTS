/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Logo from '../../../assets/images/Logo.png'
import { NavLink } from 'react-router'
const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
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
              <li> <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-orange-400 ${isActive ? 'text-orange-400' : ''}`
                }
              >About Us</NavLink></li>
              <li><NavLink to={'/projectLibrary'}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-orange-400 ${isActive ? 'text-orange-400' : ''}`
                }>Project Library</NavLink></li>
              <li><NavLink
                to={'/blog'}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-orange-400 ${isActive ? 'text-orange-400' : ''}`
                }
              >Blog</NavLink></li>
              <li><NavLink 
              to={'/contactUs'}
              className={({ isActive }) =>
                  `transition-all duration-300 hover:text-orange-400 ${isActive ? 'text-orange-400' : ''}`
                }
              >Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar