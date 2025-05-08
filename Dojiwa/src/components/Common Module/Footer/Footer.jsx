import React from 'react'
import dojiwa from "../../../assets/images/Logo.png"
import fb from "../../../assets/images/facebook.png"
import insta from "../../../assets/images/instagram.png"
import linkedin from "../../../assets/images/linkedin.png"
import { NavLink } from 'react-router'
const Footer = () => {
  return (
    <div className='bg-footerBg m-auto pb-5'>
      <div className='flex  justify-between items-center px-36 pt-5'>
        <div>
         <NavLink to={'/blog'}><img className='h-[54px]' src={dojiwa} alt="" /></NavLink> 
        </div>
        <div className='p-5 flex gap-6 text-white'>
          <NavLink className='text-[16px]' href="#">Privacy Policy</NavLink>
          <NavLink className='text-[16px]' href="#">Terms & Services</NavLink>
          <NavLink className='text-[16px]' href="#">Support@dojiwa.com</NavLink>
        </div>
        <div className=''>
          <ul className='flex items-center pt-3 gap-3 style-none'>
            <li className='pointer-cursor'><a href="https://www.facebook.com/vmstechs/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="" /></a></li>
            <li className='pointer-cursor'><a href="https://www.instagram.com/vms_techs/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /></a></li>
            <li className='pointer-cursor'><a href="https://www.linkedin.com/company/vms-techs/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" />
            </a></li>
          </ul>
        </div>
      </div>
      <div className='pb-3 text-center text-gray-500'>
        <h4>Copyright @ 2025 - Vms Tech</h4>
      </div>
    </div>
  )
}

export default Footer