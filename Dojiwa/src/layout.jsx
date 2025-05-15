import React from 'react'
import NavBar from "./components/Common Module/Header/NavBar.jsx"
import Footer from "./components/Common Module/Footer/Footer.jsx"
import { Outlet } from 'react-router'

const layout = () => {
    return (
        <div className='relative'> 
            {/* <NavBar />  */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default layout