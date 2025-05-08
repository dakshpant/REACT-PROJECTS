import React from 'react'
import dojiwa from '../images/dojiwaWatermark.png'

const Card = (props) => {
    return (
        <div className='relative border border-gray-400 h-[260px] w-[239px]  rounded-3xl CardGradient shadow-2xl cursor-pointer transition-all duration-500 '>
            <div>
                <img className='h-[70px] w-[55.5px] absolute right-2 top-2' src={dojiwa} alt="" />
            </div>
            <div className='flex flex-col justify-center p-2'>
                <div>
                    <img className='w-[100px] h-[100px]' src={props.img} alt="" />
                </div>
                <div>
                    <h2 className='text-white font-Montserrat font-semibold text-[24px]'>{props.heading}</h2> 
                </div>
                <div>
                    <p className='text-white font-Montserrat tracking-wide'>
                    {props.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card