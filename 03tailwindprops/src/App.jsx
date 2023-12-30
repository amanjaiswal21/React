import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Cards.jsx' 

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Aman",
    Age:"18",
    college :"MNIT"
  }
  let arr=[1,2,3,4,5,6,7,8,9,10]

  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-xl mb-4' >Tailwind test</h1>
  <Card userName="AmanJais" btnText="click Me" />
  <Card userName="Abhilash" btnText="visit Me" />
    </>
  )
}

export default App
