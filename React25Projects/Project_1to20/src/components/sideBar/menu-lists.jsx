import React from 'react'
import MenuItems from './menu-items'

const MenuList = ({list=[]}) => {
  return (
    <div>
        <ul className=' text-center list-decimal pl-5 '>
            {
                list && list.length ? list.map((listItems, index)=>{
                    return <MenuItems key={index} items={listItems}/>
                }):<p>No Data Found</p>
            }
        </ul>
    </div>
  )
}

export default MenuList