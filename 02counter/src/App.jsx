import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
let [counter,setCounter]=useState(15)

const addValue=()=>{

counter=counter+1;
if(counter<=20)
setCounter(counter);  
}

const decreseValue=()=>{
 
counter=counter-1;
if(counter>=0)
setCounter(counter);  
}



  return (
    <>
<p>counter is : {counter}</p>
    <button onClick={addValue}>increase value {counter}</button>
    
    <br />
    <button onClick={decreseValue}>decrese value {counter}</button>
    </>
  )
}

export default App
