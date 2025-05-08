import React from 'react'
import Logo from '../../../assets/images/Logo.png'
import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <>
    <div 
    className='px-12 '> 
      <div className='bg-[#242424] p-8 py-7 rounded-xl flex justify-between'>
        <div className=''>
          <NavLink to={'/'}><img 
          className=''
          width={90}
          height={34}
          src={Logo} 
          alt="dojiwaLogo" />
          </NavLink>
        </div>
        <div className=''>
          <ul className='text-white font-[16px] flex justify-evenly items-center gap-5 '>
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