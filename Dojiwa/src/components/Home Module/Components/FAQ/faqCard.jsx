import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";



const FaqCard = (props) => {
    const [isClicked, SetIsClicked] = useState(false)


    return (
        <div className=''>
            <div
            onClick={() => SetIsClicked(!isClicked)}
             className="container xl:w-[558px] xl:min-h-[125px] xl:max-h-[400px] rounded-xl shadow-2xl bg-white md:w-[400px] md:min-h-[100px] md:max-h-[600px] sm:w-[390px] sm:max-h-auto">
                <div className='flex flex-row gap-4 md:justify-items-start xl:pt-7 md:pt-7 sm:py-5 sm:px-1'>
                    <div className="xl:mt-2.5 cursor-pointer md:mt-1">
                        {isClicked ? (
                            <FaMinus size={25} color='#52BD95' />
                        ) : (
                            <FaPlus size={25} onClick={() => SetIsClicked(!isClicked)} />
                        )}
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <div>
                            <h2 className="xl:text-[20px]/[26px] font-[600] self-stretch sm:text-[13px]/[20px]">
                                {props.question1}<br /> {props.question2}
                            </h2>
                        </div>
                        <div
                            className={`transition-all duration-500 overflow-hidden`}
                            style={{
                                maxHeight: isClicked ? '400px' : '0px',
                                opacity: isClicked ? 1 : 0,
                            }}
                        >
                            <AnimatePresence initial={false}>
                                {isClicked && (
                                    <motion.p
                                        className="text-[16px]/[24px] font-Montserrat font-[400] mt-2"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "400px", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 1.25 }}
                                    >
                                        {props.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqCard
