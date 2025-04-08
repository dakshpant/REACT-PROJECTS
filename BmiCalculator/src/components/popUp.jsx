import React, { useRef } from 'react'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";


const PopUp = ({onClose,PopUpBmi,PopUpMessage}) => {
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target){
            onClose();
        }
    }
  return (


    <div className='inset-0 absolute flex justify-center items-center'>
  <div
    ref={modalRef}
    onClick={closeModal}
    className='opacity-40 bg-black absolute backdrop-blur-sm w-full h-full top-0 left-0 right-0'
  ></div>

  <div className='mt-20 flex flex-col justify-center items-center gap-5 absolute text-white'>
    <button onClick={onClose} className='self-end mr-4'>
      <IoMdClose size={30} />
    </button>
    
    <div className='bg-indigo-600 opacity-100 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
      <h2 className='text-3xl font-extrabold'>{PopUpBmi}</h2>
      <p className='text-xl font-bold max-w-md text-white'>{PopUpMessage}</p>
    </div>
  </div>
</div>
  )
}

export default PopUp