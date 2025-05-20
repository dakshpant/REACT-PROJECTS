/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../Common Module/Header/NavBar'
import Wave from 'react-wavify'
import icon1 from './Components/images/icon1.png'
import icon2 from './Components/images/icon.png'
import icon3 from './Components/images/icon3.png'
import icon4 from './Components/images/icon4.png'
import Card from './Components/Card 1/card'
import Icon1 from './Components/images/card1-img1.png'
import Icon2 from './Components/images/card1-img2.png'
import Icon3 from './Components/images/card1-imf3.png'
import Icon4 from './Components/images/card1-img4.png'
import img1 from './Components/images/image1.png'
import img2 from './Components/images/image2.png'
import img3 from './Components/images/image3.png'
import img4 from './Components/images/image4.png'
import sec4Bg from './Components/images/design-pattern.png'
import { motion } from "motion/react"
import { TypeAnimation } from 'react-type-animation';
const About = () => {
  return (
    <div className='relative bg-[#FEF8F1]'>
      <div className='pt-5 pb:10 gradient2'>
        {/* Nav Div */}
        <div className='sticky top-0 z-1'>
          <NavBar />
        </div>
        {/* Section1 */}
        <div>
          <div className='flex flex-col items-normal shadow-2xl xl:mt-7 '>
            {/* <h1 className='gradientColor2  text-start font-Montserrat tracking-[2px] xl:text-6xl/[78px] font-bold xl:w-[912px] xl:ps-20 '>Welcome to the Next <br /> Era of Collaboration</h1> */}
             <TypeAnimation
                className="gradientColor2  text-start font-Montserrat tracking-[2px] xl:text-6xl/[78px] font-bold xl:w-[912px] xl:ps-20 "
                style={{
                  whiteSpace: 'pre-line',
                  height: '185px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
                sequence={[
                  `Welcome to the Next\n Era of Collaboration`, 
                ]}
                speed={10}
                
                wrapper="span"
                repeat={0}
              />
            <div >
              <p className='justify-self-end xl:pe-16 xl:my-5 font-Montserrat capitalize font-normal  text-white xl:text-[24px]/[36px] text-justify xl:w-[853px]'>We believe truly groundbreaking ideas emerge when teamwork is seamless, fast, and accessible to everyone. By harnessing the power of advanced AI, we enable teams to innovate together in real time, regardless of location. Transform your workflow, break down barriers, and unite your people around a shared vision. It's time to collaborate better, faster, and more effectively than ever before.</p>
            </div>
          </div>
          {/* Wave section */}
          <div className='relative xl:mb-45 lg:mb-40 md:mb-35 sm:mb-30'>
            {/* Wave */}
            <div className='absolute top-0 left-0 right-0'>
              <Wave
                fill='#4e1062'
                paused={false}
                options={{
                  height: 30,
                  amplitude: 50,
                  speed: 0.25,
                  points: 5
                }}
                className='xl:mt-[-1px] rotate-180 lg:translate-y-0 lg:scale-y-100 sm:translate-y-[-38px] sm:scale-y-50'>
              </Wave>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className='my-18 container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-14'>
          <div className='flex flex-col justify-center items-center gap-1.5'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-sec2-h2 font-Montserrat text-4xl font-[700]'>We Have Four Core Beliefs</h2>
            </div>
            <div>
              <p className='font-Montserrat text-lg'>We see every day as an opportunity to transform our values into meaningful actions.</p>
            </div>
          </div>
          <div className='flex flex-wrap justify-between items-center gap-5 mb-14'>
            <img
              className='h-[200px] w-[200px]'
              src={icon1} alt="" />
            <img
              className='h-[200px] w-[200px]'
              src={icon2} alt="" />
            <img
              className='h-[200px] w-[200px]'
              src={icon3} alt="" />
            <img
              className='h-[200px] w-[200px]'
              src={icon4} alt="" />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className='mb-14'>
        <div className='grid grid-cols-4 grid-rows-2'>
          <img src={img1} alt="" />
          <Card img={Icon1} heading='99.9%' desc='Accuracy in AI Translation' />
          <img src={img2} alt="" />
          <Card img={Icon2} heading="4" desc="AI-Powered Solutions" />
          <Card img={Icon3} heading="10x" desc="Faster Processing Speeds" />
          <img src={img3} alt="" />
          <Card img={Icon4} heading="24/7" desc="Customer Support" />
          <img src={img4} alt="" />

        </div>
      </div>
      {/* Section 4 */}
      <div className='pb-17 pt-3'>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center gap-y-10 relative z-10'>
            <motion.img className='absolute w-[410px] h-[440px] top-[-20px] right-[-5px] z-[-1] rotate-[1.5deg]' src={sec4Bg} alt="" animate={{ rotateZ: 360 , scaleZ: 10 , transformPerspective: 500 }} transition={{ duration: 10, repeat: Infinity ,  }} />
            {/* <img className='absolute w-[481px] h-[445px] top-[-20px] left-220 z-0' src={sec4Bg} alt="" /> */}
            <div className='w-[1072px] px-10'>
              <p className='text-center text-[#242424] font-Montserrat text-[22px]/[30px] font-[550] capitalize'>Founded by a team of visionary experts, Dojiwa is committed to pushing the boundaries of AI research and innovation. We focus on making the development, deployment, and distribution of next-gen generative AI applications more robust, performant, and cost-effective, especially for forward-thinking enterprises.</p>
            </div>
            <div className='w-[666px]'>
              <p className='text-center font-Montserrat text-[20px]/[30px] font-[400] capitalize'>By leveraging Dojiwa’s AI building blocks, businesses gain new market opportunities and forge deeper, more meaningful connections with their audiences. Join us as we continue to redefine what’s possible in the world of AI, shaping a future that is both groundbreaking and accessible to all.</p>
            </div>
            <div className=''>
              <p className='px-4 py-1.5 text-center font-Montserrat text-[20px] font-[400] capitalize rounded-full bg-btn-text-orange text-white'>Contact Us for Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
