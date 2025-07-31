/* eslint-disable no-unused-vars */
import { useState } from "react"
import React from 'react'


const Tabs = ({ tabsContent, onChange }) => {
     const [currentTabIndex, setCurrentTabIndex] = useState(0)
     function handleOnClick(CurrenIndex) {
          setCurrentTabIndex(CurrenIndex)
          onChange(CurrenIndex)
     }
     return (
          <div className='wrapper'>
               <div className='heading flex flex-row justify-center gap-4'>
                    {
                         tabsContent.map((tabItem, index) => {
                              return <div onClick={() => handleOnClick(index)} className={`${currentTabIndex===index?'bg-green-400':"bg-red-400"} transition-all duration-700  p-3 rounded-xl`} key={index}>
                                   <span className="text-2xl">{tabItem.label}</span>
                              </div>
                         })
                    }
               </div>
               <div className='content mt-6 text-xl '>
                    {
                         tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                    }
               </div>
          </div>
     )
}

export default Tabs