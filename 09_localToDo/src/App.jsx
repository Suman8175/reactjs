import React from 'react'
import AddTask from './component/AddTask'
import ListTask from './component/ListTask'
import LoginUser from './component/LoginUser'
import ShowUser from './component/ShowUser'
function App() {


  return (
    <>
      <h1 className='text-center bg-red-400'>React + Vite</h1>
      <AddTask />
      <ListTask />
      <LoginUser />
      <ShowUser />
    </>
  )
}

export default App
