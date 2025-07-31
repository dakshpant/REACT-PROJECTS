import React from 'react'

const Index = ({id, header, body, footer, onClose}) => {
  return (
    <div className='mt-5'>
        <div id={id || 'modal'} className='modal '>
            <div className='content text-center w-full'>
                <div className='header flex flex-row-reverse gap-4 items-center justify-center my-10'>
                    <span onClick={onClose} className='cursor-pointer px-1.5 py-0 rounded-full bg-gray-950 text-white'>&times;</span>
                    <span>{header ? header : 'Default Header'}</span>
                </div>
                <div className='body'>
                    <span>{body ? body : 
                <p className='text-lg'>This is our modal Body</p>
                }</span>
                </div>
                <div className='footer my-10'>
                    <span>{footer ? footer : 'Default Footer'}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index