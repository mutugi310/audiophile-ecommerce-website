import react from "react";
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer(){
    return (
    
           
    <footer className='bg-pBlack text-pWhite mb-0 w-full'>
        <div  className=' container flex flex-col gap-4 mx-auto p-4 w-full justify-center align-middle'>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between ">    
                <div className=" flex justify-center sm:justify-start md:justify-start lg:justify-normal ">
                    <NavLink to="/" className='hover:text-pBrown'>Audiophile</NavLink>
                </div>
                <nav>
                    <ul className=' flex flex-col gap-3 items-center sm:flex-row sm:justify-start md:justify-start lg:justify-start '>
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
            <div className="flex justify-center sm:justify-start md:justify-start lg:justify-start">
                <p className="lg:w-4/6 text-center sm:text-left">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex sm:flex-row sm:justify-between lg:flex-col-reverse">
                <div className="flex justify-center sm:justify-start md:justify-start lg:justify-start ">
                    <p> &copy;kelvin {new Date().getFullYear()}.All rights Reserved</p>
                </div>
                <div className="flex gap-2 justify-center md- lg:justify-end">
                    <FaFacebookSquare />
                    <FaTwitter />
                    <FaInstagram />
                </div>
                
            </div>
        </div>
      
    </footer>
           
    )
}

export default Footer 