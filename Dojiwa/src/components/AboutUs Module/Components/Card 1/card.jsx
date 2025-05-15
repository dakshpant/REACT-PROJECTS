import React from 'react'
const Card = (props) => {
  return (
    <div className='h-[250px] w-[360px] bg-purple '>
        <div className='flex flex-col justify-center items-center gap-3 mt-8'>
            <div>
                <img className='xl:h-[80px] w-[80px]' src={props.img} alt="" />
            </div>
            <div className='flex flex-col gap-0 items-center justify-center'>
                <h2 className='font-Montserrat text-white text-6xl capitalize font-bold'>
                    {props.heading}
                </h2>

                <h4 className='text-[18px] text-gray'>{props.desc}</h4>
            </div>
        </div>
    </div>
  )
}

export default Card