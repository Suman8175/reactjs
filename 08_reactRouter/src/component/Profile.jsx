import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {id}=useParams()
  return (
    <>
    <div className='top-0 right-0 h-screen mx-auto bg-red-500'>Profile</div>
    <h2>Profile Id:{id}</h2>
    </>
  )
}

export default Profile