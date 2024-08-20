import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    const randomNumber=Math.floor(Math.random()*35)
    return (
        <>
            <header className='sticky'>
                <nav className='flex items-center justify-between p-2 font-medium text-black bg-red-200'>
                    <Link to='/' className='flex items-center gap-2 group'>
                        <img src='https://img.icons8.com/ios/50/000000/compass--v1.png' alt='logo' className='w-10 h-10' />
                        Home</Link>
                    <div id="nav-items" className="hidden gap-12 md:flex ">
                        <NavLink to='/about' className={({isActive})=>`${isActive ? "text-orange-800" :"text-black"}`}>About</NavLink>
                        <NavLink to='/contact' className={({isActive})=>`${isActive ? "text-orange-800" :"text-black"}`}>Contact</NavLink>
                        <NavLink to={`/profile/${randomNumber}`} className={({isActive})=>`${isActive ? "text-orange-800" :"text-black"}`} >Profile</NavLink>

                    </div>
                    <button
                        className="items-center hidden gap-3 px-6 py-2 mr-5 border border-gray-400 rounded-lg md:flex hover:border-red-500 group"
                        id="btnElectron-main">
                        <img src="https://img.icons8.com/ios/50/000000/compass--v1.png" className='h-4' alt="Logo" />
                        <span>Electron Developer</span>
                        <i className="fa-solid fa-arrow-right group-hover:text-red-500"></i>
                    </button>
                </nav>
            </header>
        </>
    )
}

export default NavBar