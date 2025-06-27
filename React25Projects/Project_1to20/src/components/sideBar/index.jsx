import React from 'react'
import MenuList from './menu-lists'

const SideBar = ({menus = []}) => {
  return (
    <div className='w-[300px] min-h-[100vh] bg-blue-600 text-white'>
<MenuList list={menus}/>
    </div>
  )
}

export default SideBar