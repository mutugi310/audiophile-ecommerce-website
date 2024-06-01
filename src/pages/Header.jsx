import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cartImg from "../assets/imgs/ShapeCart.png"
import { FiMenu, FiX } from 'react-icons/fi';
function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  function toggleMenu() {
    setOpenMenu(!openMenu)
  }
  return (
    <header className='bg-pBlack text-pWhite w-full m-0 border-b-2 border-b-white'>
      <div  className=' container flex gap-4 mx-auto align-middle justify-between p-4 w-full'>
        <div>
          <button onClick={toggleMenu}>
            {openMenu?<FiX size={20}/>:<FiMenu size={20}/> }
          </button>
        </div>
        <div>
          <NavLink to="/" className='hover:text-pBrown'>Audiophile</NavLink>
        </div>
        <nav className='hidden sm:flex' >
          <ul className='flex gap-3'>
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
        <NavLink to='cart' className={({ isActive }) => isActive ? "text-red-500" : "hover:text-pBrown"}>
          <img src={cartImg} alt='shopping cart'></img>
        </NavLink>
        </div>
      </div>
      {openMenu && 
          (<nav className='sm:hidden' >
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
        </nav>)
          }
    </header>
  
  )
}

export default Header