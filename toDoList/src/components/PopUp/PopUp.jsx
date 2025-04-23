import React from 'react'
import { useRef, useState } from 'react';
import { FaRegWindowClose } from "react-icons/fa";
// import Card from '../Card/Card';
const PopUp = ({ PopClose, addTask }) => {
    const modalRef = useRef();
    const [task, setTask] = useState(
    {
        taskHeading:"",
        taskDesc:""
    }
    );
    // const [taskHeading, setTaskHeading] = useState();
    // const [taskDesc, setTaskDesc] = useState();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            PopClose();
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        addTask(task)
        PopClose()
        console.log(task);
        setTask({taskHeading: "", taskDesc: "" })
    }


    return (

        <div className='inset-0 absolute flex justify-center items-center'>
            <div
                ref={modalRef}
                onClick={closeModal}
                className='opacity-40 bg-black absolute backdrop-blur-sm w-full h-full top-0 left-0 right-0 text-white'> </div>


            <div className='flex flex-col justify-center items-center gap-5 absolute text-white'>
                <button
                    onClick={PopClose}
                    className='self-end mr-4'>
                    <FaRegWindowClose size={30} />
                </button>

                <form
                    onSubmit={handelSubmit}
                    action="submit">
                    <div className='bg-sky-900 opacity-100 rounded-xl h-150 w-200 flex flex-col gap-5 items-center justify-center mx-4 '>
                        <div className='flex justify-center items-center w-100 gap-3 py-10'>
                            <label
                                className='text-3xl font-bold w-1/2'
                                htmlFor="taskheading">Enter Task</label>
                            <input
                                name="taskHeading"
                                onChange={(e) => setTask({...task, taskHeading: e.target.value})} 
                                value={task.taskHeading}   
                                className='text-gray-500 bg-amber-50 w-100 rounded-xl p-10 py-2'
                                type="text" id='taskHeading' />
                        </div>
                        <div className='flex justify-center items-center w-100 gap-3 py-10'>
                            <label
                                className='text-3xl font-bold w-1/2'
                                htmlFor="taskheading">Enter Task Description</label>
                            <input
                                name="taskDesc"
                                onChange={(e) => setTask({...task, taskDesc: e.target.value})} 
                                value={task.taskDesc}  
                                className='text-gray-500 bg-amber-50 w-100 rounded-xl p-10 py-2'
                                type="text" id='taskDesc' />
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='p-7 py-2 text-xl font-bold bg-sky-900 text-sky-100 rounded-xl hover:bg-sky-100 hover:text-sky-900 transition-all duration-500 '>Submit</button>
                        </div>
                    </div>
                    <div />
                </form>
                {/* {task.map((item, index) => {
                    return (
                        <Card key={index} task={item} />
                    )
                })} */}
            </div>

        </div>
    )
}

export default PopUp


