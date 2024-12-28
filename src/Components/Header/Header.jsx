import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    // Main header container with styling
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5FqrS9OkN5XrA5_GXcN7OV-SoLIl0KPwoQ&s" alt="" className='w-10'/>
      <span className="text-small">Name Decide nhi huwa abhi tk is lawaris k</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to= '/home'  className= {({isActive}) =>`mr-5 hover:text-gray-900`}>Home</NavLink>
      <NavLink to='/team' className= {({isActive}) => `mr-5 hover:text-gray-900`}>Team </NavLink>
      <NavLink to='/projects' className= {({isActive}) => `mr-5 hover:text-gray-900`}>Projects</NavLink>
      <NavLink to='/services' className= {({isActive}) => `mr-5 hover:text-gray-900`}>Services</NavLink>
      <NavLink to='/about-us' className= {({isActive}) => `mr-5 hover:text-gray-900`}>About Us</NavLink>
    </nav>
    
    <button Link to= '/contact-us' className='bg-blue-700 text-white'>  Contact Us</button>
  </div>
</header>

  )
}

export default Header
