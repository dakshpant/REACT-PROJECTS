import React from 'react'
import MenuList from './menu-lists'
import { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const MenuItems = ({ items }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren((prev) => ({
  ...prev,
  [getCurrentLabel]: !prev[getCurrentLabel]
}))
  }
  console.log(displayCurrentChildren);
  
  return (
    <>
      <li className='flex flex-col gap-1  py-2'>
        <div className='flex items-center gap-4'>
        <p className='flex text-2xl items-center justify-center'>{items.label}</p>
        {
          items && items.children && items.children.length ?
            <span className='cursor-pointer px-2  hover:text-gray-400' onClick={() => handleToggleChildren(items.label)}>
              {
          displayCurrentChildren[items.label] ? <FaMinus size={15} /> : <FaPlus size={15}/>
        }
            </span>
             : null
        }
        </div>
        
        {
          items && items.children && items.children.length > 0 && displayCurrentChildren[items.label] ?
            <MenuList list={items.children} /> :
            null
        }
      </li>
    </>
  )
}

export default MenuItems