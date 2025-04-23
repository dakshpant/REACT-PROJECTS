import { useState } from "react"
import NavBar from "./components/NavBar"
import { v4 as uuidv4 } from 'uuid';
function App() {
  //The ToDo is an input text
  const [toDo, setToDo] = useState("")
  // The todos is an array which holds our tasks
  const [toDos, setToDos] = useState([])
  const handelEdit = () => {

  }
  const handelDelete = () => {

  }
  const handelAdd = () => {
    setToDos([...toDos, {id: uuidv4(), toDo, isCompleted: false}])
    setToDo("")
    console.log(toDos);

  }
  const handelChange = (e) => {
    setToDo(e.target.value)
  }
  const handelCheckBox = (e) =>{
    let id = e.target.name;
    console.log(`the id is ${id}`);
    
    let index  = toDos.findIndex(items => items.id === id);
    console.log(index);
    
    let newToDos = [...toDos];
    newToDos[index].isCompleted = !newToDos[index].isCompleted;
    setToDos(newToDos);
  }
  return (
    <>
      <NavBar />
      <div className="container mx-auto bg-violet-100 min-h-[80vh] my-5 rounded-xl p-5">
        <div className="">
          <div className="addTodo my-5">
            <h2 className="text-lg font-bold">Add a ToDO</h2>
            <input
              onChange={handelChange}
              value={toDo}
              className="w-1/2  bg-amber-50 rounded-2xl p-2 text-gray-800"
              type="text" />
            <button
              onClick={handelAdd}
              className="mx-6 p-3 py-2 text-amber-100 rounded-lg bg-violet-700 hover:bg-violet-950 transition-all duration-300
transition-all duration-300">Add</button>
          </div>
          <h2 className="text-xl font-bold">Your ToDo's</h2>
          <div className="todos">
            {toDos.map(items => {
            return <div 
            key={items.id}
            className="todo flex w-1/3 my-2 justify-between gap-3">
              <input 
              onChange={handelCheckBox}
              name={toDo.id}
              value={items.isCompleted} 
              type="checkbox" />
              <div 
              className={items.isCompleted?"line-through":""}> {items.toDo} </div>
              <div className="buttons">
                <button
                  onClick={handelEdit}
                  className="mx-1 p-2 py-1 text-amber-100 rounded-md bg-violet-700 hover:bg-violet-950 transition-all duration-300">Edit</button>
                <button
                  onClick={handelDelete}
                  className="mx-1 p-2 py-1 text-amber-100 rounded-md bg-violet-700 hover:bg-violet-950 transition-all duration-300">Delete</button>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
