import React from 'react'
import { useState } from 'react'
import Modal from './index'
import './modal.css'
const ModelTest = () => {
    const [showModal, setShowModal] = useState(false);
    function handleToggleModle() {
        setShowModal(true)
        // console.log(showModal);
        
    }
    function handleModleClose (){
        setShowModal(false)
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <button 
            className='border w-2xs text-2xl py-4 px-2 rounded-xl hover:bg-gray-950 hover:text-white transition-all duration-500'
            onClick={() => handleToggleModle()}>Open Modal PoP-UP</button>
            {
                showModal && <Modal 
                id={"customId"} 
                header={<h1 className='text-3xl'>This is Custom Header</h1>}
                body={<p>This is custom Body</p>}
                footer={<h1 className='text-3xl'>This is custom Footer</h1>}
                onClose={handleModleClose}/>
            }

        </div>
    )
}

export default ModelTest