import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header className='sticky '>
      <nav className='flex flex-row items-center justify-between px-4 py-2 '>
        <Link className="flex flex-row items-center gap-x-3">
          <img src="https://img.icons8.com/ios/50/000000/react-native.png" alt="React Logo" />
          <h1 className='hidden text-white md:block'>React</h1>
        </Link>
        <div id="nav-items" className="hidden gap-12 md:flex ">
          <NavLink to='/' className={({isActive})=>` ${isActive ? "text-orange-700":"text-black"} hover:text-orange-700`} >Home</NavLink>
          <NavLink to='/about' className={({isActive})=>` ${isActive ? "text-orange-700":"text-black"} hover:text-orange-700`}>About</NavLink>
          <NavLink to='/contact'  className={({isActive})=>` ${isActive ? "text-orange-700":"text-black"} hover:text-orange-700`}>Contact</NavLink>
        </div>
        <div id="" className='flex gap-3'>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Login</button>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Login</button>

        </div>

      </nav>
    </header>
  )
}

export default NavBar