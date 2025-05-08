import React from 'react'
import Target from '../images/target.png'
import { useState } from 'react'
const Card = (props) => {
    const [flipped, setFlipped] = useState(false);
  return (
    <>
    <div className='flex flex-col justify-center items-center hover:scale-105 opacity-80 hover:opacity-100 transition-all duration-500'
    onMouseEnter={() => setFlipped(true)}
    onMouseLeave={() => setFlipped(false)}>
        <div className=''>
            <img
            className={`image-flip ${flipped ? 'flip-once' : ''} h-14 w-14`}
              src={Target} alt="" />
        </div>
        <div className='my-5 mb-3'>
            <h2 className='text-center font-Montserrat font-semibold text-[24px]
            text-HomeCardColor'>{props.Heading}</h2>
        </div>
        <div>
            <p className='text-[16px] text-center font-Montserrat tracking-wide'>{props.Desc1} <br /> {props.Desc2} <br /> {props.Desc3}</p>
        </div>
    </div>
    </>
  )
}

export default Card