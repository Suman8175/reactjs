import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementValue=()=>{
    if(count<20){
      setCount(count+1)
    }
  }
  const decrementValue=()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>
    < Navbar />
    <h1>Creating project with || React{count}</h1>
    <h3>Counter: {count}</h3>
    <button onClick={incrementValue}>Increment: {count}</button>
    <button onClick={decrementValue}>Decrement: {count}</button>
    <p>Value of counter is :{count}</p>
    </>
  )
}

export default App
