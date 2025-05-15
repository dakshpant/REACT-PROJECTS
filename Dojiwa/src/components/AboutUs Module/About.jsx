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
const About = () => {
  return (
    <div className='relative'>
      <div className='pt-5 pb:10 gradient2'>
        {/* Nav Div */}
        <div className='sticky top-0 z-1'>
          <NavBar />
        </div>
        {/* Section1 */}
        <div>
          <div className='flex flex-col items-normal shadow-2xl xl:mt-20'>
            <h1 className='gradientColor2  text-start font-Montserrat tracking-[2px] xl:text-6xl/[78px] font-bold xl:w-[912px] xl:ps-20 '>Welcome to the Next <br /> Era of Collaboration</h1>
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
          <Card img={Icon1}  heading='99.9%' desc='Accuracy in AI Translation' />
          <img src={img2} alt="" />
          <Card img={Icon2} heading="4" desc="AI-Powered Solutions"/>
          <Card img={Icon3} heading="10x" desc="Faster Processing Speeds"/>
          <img src={img3} alt="" />
          <Card img={Icon4} heading="24/7" desc="Customer Support"/>
          <img src={img4} alt="" />

        </div>
      </div>
    </div>
  )
}

export default About
