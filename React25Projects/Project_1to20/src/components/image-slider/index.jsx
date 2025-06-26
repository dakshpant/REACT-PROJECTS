import React, { useEffect, useState } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import "../image-slider/styles.css"
const ImageSlider = ({ url }) => {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  const fetchImage = async (getUrl) => {
    try {
      const res = await fetch(getUrl);
      const data = await res.json();
      setImages(data)
    }

    catch (error) {
      console.log("Erros is", error);
    }
  }
  console.log(images);

  useEffect(() => {
    fetchImage(url)
  }, [url])

  const slideLeft = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    console.log(currentSlide);
    console.log('PrevClicked');
    
    
  }
  const slideRight = () => {
    setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1)
  }
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className='mb-50'>
      <div className='w-[500px] h-[380px]  m-auto py-16 px-4 relative group '>
        <div className='w-fit h-fit rounded-2xl bg-center bg-cover duration-500 flex justify-center items-center '>
          {images ? images.map((img,index)=>(
             <img
              className='rounded-[0.5rem] shadow-md w-full h-full object-cover'
              key={index}
              src={img.download_url}
              alt={img.author}
            />
          )) : <p>Loading...</p>}

        </div>
        <div className='absolute top-[62%] left-5 text-2xl rounded-full  text-white cursor-pointer'>
          <IoIosArrowDropleftCircle
            onClick={slideLeft}
            size={30}
          />
        </div>
        <div className='absolute top-[60%] right-5 text-2xl rounded-full text-white cursor-pointer'>
          <IoIosArrowDroprightCircle
            onClick={slideRight}
            size={30}
          />
        </div>
        <div className='flex  top-50 justify-center py-2 relative z-20'>
          {images.map((img, Index) => (
            <div
              key={Index}
              onClick={() => goToSlide(Index)}
              className='text-2xl cursor-pointer '
            >
              <RxDotFilled />
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default ImageSlider