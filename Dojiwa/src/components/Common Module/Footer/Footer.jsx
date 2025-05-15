import React from 'react'
import dojiwa from "../../../assets/images/Logo.png"
import fb from "../../../assets/images/facebook.png"
import insta from "../../../assets/images/instagram.png"
import linkedin from "../../../assets/images/linkedin.png"
import { NavLink } from 'react-router'
const Footer = () => {
  return (
    <div className='bg-footerBg m-auto pb-5'>
      <div className='flex justify-around items-center md:px-36 md:pt-5 sm:px-0'>
        <div>
         <NavLink to={'/blog'}><img className='md:h-[54px] sm:h-[35px]' src={dojiwa} alt="" /></NavLink> 
        </div>
        <div className='p-5 flex md:gap-6 sm:gap-2 sm:text-center text-white'>
          <NavLink className='md:text-[16px] sm:text-[12px]' href="#">Privacy Policy</NavLink>
          <NavLink className='md:text-[16px] sm:text-[12px]' href="#">Terms & Services</NavLink>
          <NavLink className='md:text-[16px] sm:text-[12px]' href="#">Support@dojiwa.com</NavLink>
        </div>
        <div className=''>
          <ul className='flex items-center md:pt-3 sm:pt-2 gap-4 style-none'>
            <li className='pointer-cursor md:max-w-10 sm:max-w-7'><a href="https://www.facebook.com/vmstechs/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="" /></a></li>
            <li className='pointer-cursor md:max-w-10 sm:max-w-6'><a href="https://www.instagram.com/vms_techs/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /></a></li>
            <li className='pointer-cursor  md:max-w-10 sm:max-w-6'><a href="https://www.linkedin.com/company/vms-techs/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" />
            </a></li>
          </ul>
        </div>
      </div>
      <div className='pb-3 text-center text-gray-500'>
        <h4 className='md:text-2xl sm:text-lg'>Copyright @ 2025 - Vms Tech</h4>
      </div>
    </div>
  )
}

export default Footer