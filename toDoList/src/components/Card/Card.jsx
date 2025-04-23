import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const Card = ({task}) => {
  const [check, setcheck] = useState(false)

  const [bin, setBin] = useState()

  const handelCheck = () => {
    setcheck(!check)
  }
  
  const handelBin = () => {
    setBin('hidden')
  }

  return (
    <div
    id='MainBody'
     className={`${bin} border-white mx-auto max-w-100 bg-white rounded-lg p-8 py-2 my-4 hover:scale-150 transition-all `}>
      <div className="container mx-auto max-w-100 flex justify-center items-center gap-20 py-5">
        <div className="">
          <h1 
          id='heading'
          className={`${!check?null:'text-gray-500 line-through'} text-3xl font-semibold`}>{task.taskHeading}</h1>
          <p
          id='desc' 
          className={`${!check?null:"hidden"} text-gray-500 text-lg`}>{task.taskDesc}</p>
        </div>
        <div className=" flex gap-4">
          <button className="">
            <IoMdCheckmark 
            id='check'
            onClick={handelCheck}
            // onClick={()=>{
            //   document.getElementById('heading').style.textDecoration = 'line-through'
            //   document.getElementById('heading').style.color = 'gray'
            //   document.getElementById('check').style.backgroundColor = 'blue'
            //   document.getElementById('desc').style.display = 'none'
            // }}
            className={`${ !check ?'bg-red-600':'bg-blue-600'} rounded-full text-white cursor-pointer`} 
            size={40} />
          </button>
          <button>
          <MdDeleteForever 
          // onClick={()=>{
          //   document.getElementById('MainBody').style.display = 'none'
          // }}
          onClick={handelBin}
          className={`bg-red-600 rounded-full text-white cursor-pointer`} 
          size={40}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card