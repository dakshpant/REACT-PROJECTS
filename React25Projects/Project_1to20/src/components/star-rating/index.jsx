import React from 'react'
import { FaCentercode, FaStar } from "react-icons/fa";
import './style.css'
import { useState } from 'react';
const StarRating = () => {
    const [rate, setRate] = useState()
    const [hover, setHover] = useState()   
const handleClick= (index) => {
    setRate(index)
    console.log(`index clicked${index}`);
    console.log(`rating is${rate}`);
}
const handleMouseEnter = (index)=>{
    setHover(index)
    console.log(`mouse Entering ${index}`);
    
}
const handleMouseLeave =(index)=>{
setHover(rate)
console.log(`mouse leaving ${index}`);
}
    return (
        <div className='mt-10 h-[300px]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-wrap'>
                    {
                        Array(5).fill(0).map((_, index,) => (
                            <FaStar 
                            className={index <= (rate || hover) ? "active" : "inactive"}
                            key={index} 
                            onClick={()=>handleClick(index)}
                            onMouseEnter={()=>{
                                handleMouseEnter(index)
                            }}
                            onMouseLeave={()=>handleMouseLeave()}
                            size={50} />
                        ))
                    }
                </div>
                    <p>Your Rating Is {rate+1}</p>
            </div>
        </div>
    )
}

export default StarRating


