import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cartImg from "../assets/imgs/ShapeCart.png"
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../assets/sharedComponents/Button';


function Header({handleCartOpen}) {
  const [openMenu, setOpenMenu] = useState(false)
  function toggleMenu() {
    setOpenMenu(!openMenu)
  }
  return (
    <header className='relative bg-pBlack  text-pWhite w-full m-0 '>
      <div  className=' container flex mx-auto align-middle justify-between p-4 w-full border-b-2 border-b-white border-opacity-15 lg:px-10  '>
        {/* hamburger button for small and mideum devices */}
        <div className='lg:hidden'>
          <button  onClick={toggleMenu}>
            {!openMenu&&<FiMenu size={20}/> }
          </button>
        </div>
        <div>
          <NavLink to="/" className='hover:text-pBrown'>Audiophile</NavLink>
        </div>
        {/* Desktop menu */}
        <nav className='hidden lg:flex flex-grow justify-center' >
          <ul className='flex gap-6'>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Home</NavLink>
            </li>
            <li>
              <NavLink to='headphones' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Headphone</NavLink>
            </li>
            <li>
              <NavLink to='speakers' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Speakers</NavLink>
            </li>
            <li>
              <NavLink to='earphones' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Earphones</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          
          <button  onClick={handleCartOpen} className="relative focus:outline-none">
            <img src={cartImg} alt='shopping cart'></img>
          </button>
        </div>
      </div>
    {/* mobile navigation */}
      {openMenu && 
          (
          <div className='lg:hidden fixed inset-0 bg-opacity-80 z-50 flex '>
            <div className='relative top-0 left-0 w-1/2 h-1/2 bg-pBlack text-pWhite p-6 sm:w-1/3 '>
            <button className='absolute top-12 right-4 ' onClick={toggleMenu}>
              <FiX size={20} />
            </button>
              <nav className='pt-20'>
              <ul className='flex-col gap-3 px-4'>
                <li>
                  <NavLink to='/' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to='headphones' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Headphone</NavLink>
                </li>
                <li>
                  <NavLink to='speakers' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Speakers</NavLink>
                </li>
                <li>
                  <NavLink to='earphones' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>Earphones</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='w-1/2 h-full bg-black bg-opacity-50' onClick={toggleMenu}></div>
        </div>
        )
          }
        
    </header>
  
  )
}

export default Header