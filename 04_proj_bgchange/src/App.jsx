
import './index.css'
import { useState } from 'react'

function App() {
  let [color,setColor]= useState("white");

  return (
    <>
    <div className="w-full h-screen " style={{backgroundColor:color}}>
    <div id="wrapper" className="absolute inset-x-0 bottom-0 px-3 py-6 border border-gray-600 rounded-lg h-max m-7">
    <ul className='grid items-center justify-around h-full grid-cols-3 gap-y-2 gap-x-6 md:flex md:flex-row group '>
      <li className='text-center bg-red-500 border border-gray-300 rounded-lg px-7 py-1/ hover:cursor-pointer' onClick={()=>setColor('red')}>Red</li>
      <li className='text-center bg-green-500 border border-gray-300 rounded-lg px-7 py-1/ hover:cursor-pointer'  onClick={()=>setColor('green')}>Green</li>
      <li className='text-center bg-blue-500 border border-gray-300 rounded-lg px-7 py-1/ hover:cursor-pointer' onClick={()=>setColor('blue')}>Blue</li>
      <li className='text-center border border-gray-300 rounded-lg bg-yellow-50 px-7 py-1/ hover:cursor-pointer' onClick={()=>setColor('white')}>White</li>
      <li className='text-center text-white bg-black border border-gray-300 rounded-lg px-7 py-1/ hover:cursor-pointer' onClick={()=>setColor('black')}>Black</li>
      <li className='text-center bg-yellow-500 border border-gray-300 rounded-lg px-7 py-1/ hover:cursor-pointer' onClick={()=>setColor('yellow')}>Yellow</li>
      <li className='text-center bg-purple-500 border border-gray-300 rounded-lg px-7 py-1/ hover:cursor-pointer' onClick={()=>setColor('purple')}>Purple</li>
      <li className='text-center bg-orange-500 border border-gray-300 rounded-lg px-7 py-1/ hover:cursor-pointer' onClick={()=>setColor('orange')}>Orange</li>
    </ul>
    </div>
    </div>
    <div className="h-16"></div>
    </>
  )
}

export default App
