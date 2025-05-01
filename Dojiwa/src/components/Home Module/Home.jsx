import React from 'react'
import BgNavP from '../Common Module/Section1/BgNav'
import purpleBackground from "../../assets/images/bgP.png"
import NavBar from '../Common Module/Header/NavBar'
// import arrow from "./Components/images/mi_arrow-up.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import Wave from 'react-wavify'
const Home = () => {
  const App = () => (
    <Wave fill='#000'
      paused={false}
      style={{ display: 'flex' }}
      options={{
        height: 30,
        amplitude: 50,
        speed: 0.15,
        points: 3
      }}
    />
  )

  return (
    <>
      <div className="h-[751px] w-screen object-cover bg-center relative pt-6" style={{ backgroundImage: `url(${purpleBackground}` }}>

{/* NavBar */}

        <div className='sticky top-0 left-0 right-0'>
          <NavBar />
        </div>

{/* Section 1 */}

        <div className='flex-col flex justify-center items-center my-20'>
          <div>
            <button className='text-btn-text-orange shadow-2xl border-[0.5px] font-medium border-btn-text-orange px-4 py-1.5 rounded-full'>AI-Powered Services</button>
          </div>
          <div className='my-10'>
            <h1 className='gradientColor font-extrabold text-6xl text-center'>AI Solutions That <br />
              Redefine Creative <br />
              Workflows</h1>
          </div>
          <div>
            <p className='textMon text-white text-center'>Create smarter. Localize faster. Elevate effortlessly — <br />with the power of next-gen AI. </p>
          </div>
          <div className='my-10'>
            <button className='text-white text-xl bg-btn-text-orange items-center inline-flex rounded-full px-5 py-1.5 hover:bg-transparent hover:text-btn-text-orange transition-all duration-1000 hover:border-1 hover:border-btn-text-orange'>Connect Witgh Us <MdOutlineArrowOutward className='ms-1.5' /> </button>
          </div>
        </div>
      </div>
      {/* Section 1 wave section */}
      <div className='relative mb-40'>
        <div className='absolute top-0 left-0 right-0 z-20'>
          <Wave
            fill='#24022f'
            paused={false}
            options={{
              height: 30,
              amplitude: 50,
              speed: 0.2,
              points: 6
            }}
            className='rotate-180'>
          </Wave>
        </div>
        <div className='absolute top-0 left-0 right-0 -z-20'>
          <Wave
            fill='#45095A'
            paused={false}
            options={{
              height: 40,
              amplitude: 55,
              speed: 0.22,
              points: 7
            }}
            className='rotate-180'>
          </Wave>
        </div>
        <div className='absolute top-0 left-0 right-0 -z-30'>
          <Wave
            fill='#E78CFF'
            paused={false}
            options={{
              height: 50,
              amplitude: 60,
              speed: 0.25,
              points: 5
            }}
            className='rotate-180'>
          </Wave>
        </div>
      </div>
    
    </>
  )
}

export default Home