import React from 'react'
import purpleBackground from "../../../assets/images/bgP.png"
import NavBar from '../Header/NavBar'
const Home = () => {
  return (
    <>
      <div className="h-[751px] w-screen object-cover bg-center " style={{ backgroundImage: `url(${purpleBackground}` }}>
        <div>
          <NavBar />
        </div>
        <h1 className=" text-4xl  font-bold">Welcome to Dojiwa</h1>
      </div>

    </>
  )
}

export default Home