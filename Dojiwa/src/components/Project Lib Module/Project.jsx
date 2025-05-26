import React, { useState, useEffect } from 'react'
import NavBar from '../Common Module/Header/NavBar'
import bgVideo from './Components/images/SETUP figma animations.mp4'
import Wave from 'react-wavify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import royalStag from './Components/images/RoyalStag.png'
import oakenGlow from './Components/images/OakenGlow.png'
import americaPride from './Components/images/AmericaPride.png'
import imperialBlue from './Components/images/ImperialBlue.png'
import rectangle2020 from './Components/images/Rectangle2020.png'
import realEstate from './Components/images/RealEstate.jpg'
import { Chrono } from 'react-chrono';

const Project = () => {
  const [imageSrc, SetImageSrc] = useState('');
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  // Define custom content for the first two cards
  const customContent = [
    <div key='card1' className='flex flex-row justify-between w-[1079px] h-auto'>
      <div className='flex flex-col gap-y-10 w-[500px]'>
        <div className='flex flex-row justify-between'>
          <div className='flex-col '>
            <div>
              <h2 className='text-white text-[22px]'>November 2020</h2>
            </div>
            <div>
              <h2 className='text-white text-[40px]'>
                IB HOLI
              </h2>
            </div>
          </div>
          <div>
            <img className='w-[45px] h-[85px]' src={royalStag} alt="" />
          </div>
        </div>
        <div className='flex-col '>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Client: </span>
              American Pride
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Product Used: </span>
              Face Swap
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              <span className='text-sec2-h2 text-[18px]'>Description: </span>
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              Lorem ipsum dolor sit amet consectetur. Elementum ut morbi placerat orci scelerisque quis aliquet pellentesque. Tellus tempus leo porttitor ac vel cursus. Amet enim lorem aliquam in sed nullam. In viverra mauris posuere bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={rectangle2020} alt="" />
      </div>
    </div>,

    <div key='card2' className='flex flex-row-reverse justify-between w-[1079px] h-auto'>
      <div className='flex flex-col gap-y-10 w-[500px]'>
        <div className='flex flex-row justify-between'>
          <div className='flex-col '>
            <div>
              <h2 className='text-white text-[22px]'>November 2021</h2>
            </div>
            <div>
              <h2 className='text-white text-[40px]'>
                IB HOLI
              </h2>
            </div>
          </div>
          <div>
            <img className='w-[45px] h-[85px]' src={royalStag} alt="" />
          </div>
        </div>
        <div className='flex-col '>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Client: </span>
              American Pride
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Product Used: </span>
              Face Swap
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              <span className='text-sec2-h2 text-[18px]'>Description: </span>
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              Lorem ipsum dolor sit amet consectetur. Elementum ut morbi placerat orci scelerisque quis aliquet pellentesque. Tellus tempus leo porttitor ac vel cursus. Amet enim lorem aliquam in sed nullam. In viverra mauris posuere bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={rectangle2020} alt="" />
      </div>
    </div>,
    <div key='card3' className='flex flex-row-reverse justify-between w-[1079px] h-auto'>
      <div className='flex flex-col gap-y-10 w-[500px]'>
        <div className='flex flex-row justify-between'>
          <div className='flex-col '>
            <div>
              <h2 className='text-white text-[22px]'>November 2022</h2>
            </div>
            <div>
              <h2 className='text-white text-[40px]'>
                IB HOLI
              </h2>
            </div>
          </div>
          <div>
            <img className='w-[45px] h-[85px]' src={royalStag} alt="" />
          </div>
        </div>
        <div className='flex-col '>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Client: </span>
              American Pride
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Product Used: </span>
              Face Swap
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              <span className='text-sec2-h2 text-[18px]'>Description: </span>
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              Lorem ipsum dolor sit amet consectetur. Elementum ut morbi placerat orci scelerisque quis aliquet pellentesque. Tellus tempus leo porttitor ac vel cursus. Amet enim lorem aliquam in sed nullam. In viverra mauris posuere bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={rectangle2020} alt="" />
      </div>
    </div>,
    <div key='card4' className='flex flex-row-reverse justify-between w-[1079px] h-auto'>
      <div className='flex flex-col gap-y-10 w-[500px]'>
        <div className='flex flex-row justify-between'>
          <div className='flex-col '>
            <div>
              <h2 className='text-white text-[22px]'>November 2023</h2>
            </div>
            <div>
              <h2 className='text-white text-[40px]'>
                IB HOLI
              </h2>
            </div>
          </div>
          <div>
            <img className='w-[45px] h-[85px]' src={royalStag} alt="" />
          </div>
        </div>
        <div className='flex-col '>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Client: </span>
              American Pride
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Product Used: </span>
              Face Swap
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              <span className='text-sec2-h2 text-[18px]'>Description: </span>
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              Lorem ipsum dolor sit amet consectetur. Elementum ut morbi placerat orci scelerisque quis aliquet pellentesque. Tellus tempus leo porttitor ac vel cursus. Amet enim lorem aliquam in sed nullam. In viverra mauris posuere bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={rectangle2020} alt="" />
      </div>
    </div>,
    <div key='card5' className='flex flex-row-reverse justify-between w-[1079px] h-auto'>
      <div className='flex flex-col gap-y-10 w-[500px]'>
        <div className='flex flex-row justify-between'>
          <div className='flex-col '>
            <div>
              <h2 className='text-white text-[22px]'>November 2024</h2>
            </div>
            <div>
              <h2 className='text-white text-[40px]'>
                IB HOLI
              </h2>
            </div>
          </div>
          <div>
            <img className='w-[45px] h-[85px]' src={royalStag} alt="" />
          </div>
        </div>
        <div className='flex-col '>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Client: </span>
              American Pride
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Product Used: </span>
              Face Swap
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              <span className='text-sec2-h2 text-[18px]'>Description: </span>
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              Lorem ipsum dolor sit amet consectetur. Elementum ut morbi placerat orci scelerisque quis aliquet pellentesque. Tellus tempus leo porttitor ac vel cursus. Amet enim lorem aliquam in sed nullam. In viverra mauris posuere bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={rectangle2020} alt="" />
      </div>
    </div>,
    <div key='card6' className='flex flex-row justify-between w-[1079px] h-auto'>
      <div className='flex flex-col gap-y-10 w-[500px]'>
        <div className='flex flex-row justify-between'>
          <div className='flex-col '>
            <div>
              <h2 className='text-white text-[22px]'>November 2025</h2>
            </div>
            <div>
              <h2 className='text-white text-[40px]'>
                IB HOLI
              </h2>
            </div>
          </div>
          <div>
            <img className='w-[45px] h-[85px]' src={royalStag} alt="" />
          </div>
        </div>
        <div className='flex-col '>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Client: </span>
              American Pride
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white mb-2'>
              <span className='text-sec2-h2 text-[18px]'>Product Used: </span>
              Face Swap
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              <span className='text-sec2-h2 text-[18px]'>Description: </span>
            </p>
          </div>
          <div>
            <p className='text-[18px] text-white'>
              Lorem ipsum dolor sit amet consectetur. Elementum ut morbi placerat orci scelerisque quis aliquet pellentesque. Tellus tempus leo porttitor ac vel cursus. Amet enim lorem aliquam in sed nullam. In viverra mauris posuere bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={rectangle2020} alt="" />
      </div>
    </div>,
  ];

  // Define data for the timeline (can be more than custom content)
  // const items = [
  //   {
  //     title: "2020", // Corresponds to customContent[0]
  //     // Other props for item 1 can be provided but won't be used for default rendering if custom content is present
  //   },
  //   {
  //     title: "2021", // Corresponds to customContent[1]
  //   },
  //   {
  //     title: "2022",

  //   },
  //   {
  //     title: "2023",

  //   },
  //   {
  //     title: "2024"
  //   },
  //   {
  //     title: "2025",

  //   },
  // ];

  const items = [
    { title: "2020" },
    { title: "2021" },
    { title: "2022" },
    { title: "2023" },
    { title: "2024" },
    { title: "2025" },
  ];

  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-[#fef8f1]'>
      <div className=' bg-[#330441]'>
        <div className='container mx-auto'>
          <div className='absolute top-0 right-0 left-0 mt-5 z-10' >
            <NavBar />
          </div>
          <div className='relative '>
            <video className='w-[1440px] h-[582px]' src={bgVideo} autoPlay loop muted></video>

            <div className='absolute top-60 left-0 lg:w-[706px]'>
              <div className='flex flex-col gap-2'>
                <div>
                  <h1 className='gradientColor font-extrabold lg:text-7xl md:text-4xl sm:text-3xl text-start'>Empowering Your <br /> Business with AI <br /> Solutions</h1>
                </div>
                <div>
                  <p className='text-white font-Montserrat tracking-wide capitalize font-[20px]/[27px]'>Revolutionize customer experiences, streamline operations, and drive <br /> growth with our AI capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative xl:mb-45 lg:mb-40 md:mb-35 sm:mb-30'>
          {/* Wave */}
          <div className='absolute top-0 left-0 right-0'>
            <Wave
              fill='#330441'
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
      {/* Section 2 */}
      <section className=' pb-10 '>
        <div className='container mx-auto pb-20'>
          <div className='flex flex-row gap-x-14 justify-around'>
            <div className='basis-80 flex flex-col gap-y-3 justify-center items-center'>
              <h3 className='text-[26px]/[36px] font-bold font-Montserrat text-sec2-h2'>We’ve Powered AI Experiences For</h3>
              <p className='text-[18px]/[24px] font-[500] font-Montserrat capitalize'>From marketing to media — our AI transforms ideas into impactful visuals.</p>
            </div>
            <div className='w-[825px] h-[150px] pt-5'>
              <div className="slider-container">
                <Slider {...settings}>
                  <div className='w-[139px] h-[100px] '>
                    <img className='w-[ 73.282px] h-[100px]' src={royalStag} alt="" />
                  </div>
                  <div className='w-[139px] h-[100px] '>
                    <img className='w-[99.664px]' src={americaPride} alt="" />
                  </div>
                  <div className='w-[139px] h-[100px]'>
                    <img className='w-[80.852px]' src={imperialBlue} alt="" />
                  </div>
                  <div className='w-[145px] pt-5'>
                    <img className='w-[145.99px]' src={oakenGlow} alt="" />
                  </div>

                </Slider>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <div>
              <h1 className='text-sec2-h2 text-center text-[32px]/[48px]
                text-Montserrat font-bold'>Projects</h1>
            </div>
            <div>
              <p className='text-ceqter text-[18px]/[27px] font-[500] font-Montserrat capitalize tracking-wide mt-2'>We see every day as an opportunity to turn values into action through our behavior.</p>
            </div>
          </div>
          {/* timeline */}
          <div className='container mx-auto mt-10'>
            <div className='bg-purple rounded-3xl h-auto py-10'>
              <Chrono
                items={items}
                mode="HORIZONTAL"
                theme={{
                  // secondary: "blue",
                }}
                disableToolbar={false}
                toolbarPosition="bottom"
                enableLayoutSwitch={false}
                disableInteraction={false}
                activeItemIndex={activeItem}
                disableClickOnCircle
              >
                {customContent}
              </Chrono>
            </div>

          </div>
        </div>
      </section>
      {/* Below Timeline */}
      <section>
        <div className='container mx-auto pb-20'>
          <div className='flex flex-col justify-center items-center gap-y-20'>
            <div className='flex flex-col justify-center items-center'>
              <div>
                <h1 className='font-Montserrat text-sec2-h2 text-[32px]/[48px] font-bold'>How Dojiwa AI Can Help You?</h1>
              </div>
              <div>
                <p className='text-center text-[18px]/[27px] font-[500] font-Montserrat capitalize tracking-normal'>
                  We see every day as an opportunity to turn values into action through our behavior.
                </p>
              </div>
            </div>
            <div className='flex flex-row  w-full justify-around items-center'>
              <div className='flex flex-col  gap-y-8 '>
                <div><a>Real Estate</a></div>
                <div><a>Healthcare</a></div>
                <div><a>B2B Software</a></div>
                <div><a>Financial services</a></div>
                <div><a>Sports & entertainment</a></div>
                <div><a>Sales & Marketing</a></div>
                <div><a>Travel</a></div>
                <div><a>HR & Recruiting</a></div>
              </div>
              <div>
                <div>
                  <img
                    className='w-[738px] h-[438px]'
                    src={realEstate} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project