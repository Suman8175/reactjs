import React from 'react'
import { Link, NavLink, Outlet,useLocation } from 'react-router-dom'



function Contact() {
  const location = useLocation();
  const isDefaultView = location.pathname === '/contact' || location.pathname === '/contact/';
  return (
    <>
    <div className="flex flex-row">
    <div className='flex flex-col justify-around w-1/4 h-screen pl-1 pr-4 text-white bg-black gap-7'>

                        <NavLink to='' end className={({isActive})=>`px-4 py-3 border border-white rounded-md ${isActive || isDefaultView ? "bg-gray-600":"bg-transparent"}`}>Refer</NavLink>
                        <NavLink to='address' className={({isActive})=>`px-4 py-3 border border-white rounded-md ${isActive ?"bg-gray-600":"bg-transparent"}`}>Address</NavLink>
                        <NavLink to='phone' className={({isActive})=>`px-4 py-3 border border-white rounded-md ${isActive ?"bg-gray-600":"bg-transparent"}`}>Phone</NavLink>

    </div>
    <div className='flex-grow content'>
        <Outlet />
      </div>
      </div>
    </>
  )
}

export default Contact