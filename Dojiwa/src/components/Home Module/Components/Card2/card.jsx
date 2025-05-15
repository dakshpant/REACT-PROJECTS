import React from 'react'
import dojiwa from '../images/dojiwaWatermark.png'

const Card = (props) => {
    return (
        <div className='relative border border-gray-400 sm:px-1 lg:h-[260px] lg:w-[239px] sm:h-[200px] sm:w-[180px] rounded-3xl CardGradient shadow-2xl cursor-pointer transition-all duration-500 '>
            <div> 
                <img className='lg:w-[56px] sm:w-[40px] absolute right-2 top-2' src={dojiwa} alt="" />
            </div>
            <div className='flex flex-col justify-center lg:p-2 sm:p-3'>
                <div>
                    <img className='lg:w-[100px] lg:h-[100px] sm:w-[65px] sm:h-[65px]' src={props.img} alt="" />
                </div>
                <div>
                    <h2 className='text-white font-Montserrat self-stretch font-semibold lg:text-[24px] sm:mb-1 sm:text-[15px]'>{props.heading}</h2> 
                </div>
                <div>
                    <p className='text-white self-stretch font-Montserrat lg:text-[16px] sm:text-[14px] tracking-wide'>
                    {props.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card