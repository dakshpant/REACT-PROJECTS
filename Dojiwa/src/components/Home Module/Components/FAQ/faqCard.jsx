import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";



const FaqCard = (props) => {
    const [isClicked, SetIsClicked] = useState(false)
    

    return (
        <div>
            <div className="container w-[558px] max-h-[400px] rounded-xl shadow-2xl bg-white">
                <div className='flex flex-row gap-4 p-6'>
                    <div className="mt-2.5 cursor-pointer">
                        {isClicked ? (
                            <FaMinus size={25} color='#52BD95' onClick={() => SetIsClicked(!isClicked)} />
                        ) : (
                            <FaPlus size={25} onClick={() => SetIsClicked(!isClicked)} />
                        )}
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <div>
                            <h2 className="text-[20px]/[26px] self-stretch">
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
            transition={{ duration: 0.75 }}
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
