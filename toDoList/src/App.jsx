/* eslint-disable no-unused-vars */
import { useState } from "react"
import NavBar from "./components/navBar"
import Card from './components/Card/Card'
import PopUp from "./components/PopUp/PopUp"
function App() {

  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }))

  const [isPopUp , setIsPopUp] = useState(false)
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className="">
        {/* Top Bar */}
        <NavBar />
        <div className="bg-gray-100 h-[87vh]">
          {/* Mid test add section */}
          <div className="container mx-auto max-w-150 flex justify-center items-center gap-30 py-10">
            <div className="">
              <h1 className="text-3xl font-semibold">Today's Task</h1>
              <p className="text-gray-500 text-lg">{date}</p>
            </div>
            <div className="">
              <button 
              onClick={()=>setIsPopUp(!isPopUp)}
              className="bg-blue-200 text-blue-600 font-semibold text-lg rounded-xl p-6 py-2.5">+ New Task</button>
            </div>
            {isPopUp && <PopUp PopClose={()=>setIsPopUp(!isPopUp)} addTask={addTask} />}
          </div>
          {/* <div>
            {
            tasks.map((task,index)=>{
              return(
            <Card key={index} task={task} />)
          })
            }
          </div> */}
          <div>{tasks.map((task,index) => <Card key={index} task={task} />)}</div>
          {/* <div className=" my-4 ">
            <Card />
          </div>
          <div className="my-4">
            <Card />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
