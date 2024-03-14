import { useState,useEffect} from 'react'
import TodoProvider from './Context/TodoContext'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
 
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>
    prevTodo.id === id?todo:prevTodo));
  }

  const deleteTodo=(id,todo)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id != id));
  }

  const toggleCompleteTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{
    if(prevTodo.id === id){
      prevTodo.completed=true;
    }}));
  }

  useEffect(()=>{
   const todos= JOSN.parse(localStorage.getItem());
   if(todos){
    setTodos(todos)
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
                    <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
