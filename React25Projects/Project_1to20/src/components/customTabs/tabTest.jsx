import React from 'react'
import Tabs from './tabs'
const TabTest = () => {
    function Tab3 () {
        return <h1>Thsi is Tab 3 Content as a Function.</h1>
    }
    const tabs = [
        {
            label : 'Tab 1',
            content : 'Tab 1 Content'
        },
        {
            label : 'Tab 2',
            content : "Tab 2 Content"
        },
        {
            label : 'Tab 3',
            content : <Tab3/>
        }
    ]
    const handleChange = ()=>{
        
    }
  return (
    <div className='text-center'>
        <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  )
}

export default TabTest