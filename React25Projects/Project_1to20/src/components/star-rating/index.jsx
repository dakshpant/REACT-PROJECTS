import React from 'react'
import { FaCentercode, FaStar } from "react-icons/fa";
import './style.css'
import { useState } from 'react';
const StarRating = ({numberOfStars}) => {
    const [rate, setRate] = useState()
    const [hover, setHover] = useState()
    const handleClick = (index) => {
        setRate(index)
        console.log(`index clicked${index}`);
        console.log(`rating is${rate}`);
    }
    const handleMouseEnter = (index) => {
        setHover(index)
        console.log(`mouse Entering ${index}`);

    }
    const handleMouseLeave = (index) => {
        setHover(rate)
        console.log(`mouse leaving ${index}`);
    }
    return (
        <div className='mt-10 h-[200px]'>
            <div className='flex flex-col justify-center items-center'>
                {/* Method1: Explicit Return method */}
                <div className='flex flex-wrap'>
                    {
                        Array(numberOfStars).fill(0).map((_, index,) => (
                            // index = index + 1 //+=1 can't be done as its not a implicit return method

                             <FaStar
                                className={index <= (rate || hover) ? "active" : "inactive"}
                                key={index}
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => {
                                    handleMouseEnter(index)
                                }}
                                onMouseLeave={() => handleMouseLeave()}
                                size={50} />
                        ))
                    }
                </div>
                {/* Method2: Implicit Return method Here i can perform index+=1 for this we need curly braces and return statement */}
                {/* <div className='flex flex-wrap'>
                    {
                        [...Array(5)].map((_, index,) => {
                            index = index + 1 //+=1

                            return <FaStar
                                className={index <= (rate || hover) ? "active" : "inactive"}
                                key={index}
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => {
                                    handleMouseEnter(index)
                                }}
                                onMouseLeave={() => handleMouseLeave()}
                                size={50} />
                        })
                    }
                </div> */}
                <p>Your Rating Is {rate + 1}</p>
            </div>
        </div>
    )
}

export default StarRating


