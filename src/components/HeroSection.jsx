import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../assets/home/desktop/image-hero.jpg"
import heroImgTablet from "../assets/home/tablet/image-header.jpg"
import heroImgMobile from "../assets/home/mobile/image-header.jpg"
function HeroSection() {
  const [backgroundImg, setBackgroundImg]= useState(heroImg)
  useEffect(() => {
    function updateBackgroundImg() {
      if (window.innerWidth < 640) {
        setBackgroundImg(heroImgMobile)
      } else if (window.innerHeight >= 640 && window.innerWidth < 1024) {
        setBackgroundImg(heroImgTablet)
      } else {
        setBackgroundImg(heroImg)
      }
    }
    updateBackgroundImg();
    window.addEventListener('resize', updateBackgroundImg)
  
    return () => {
      window.removeEventListener('resize', updateBackgroundImg)
    }
  }, [])
  
  return (
    <section className=" text-pWhite flex items-center  relative bg-cover bg-center bg-no-repeat h-screen " style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className='w-full h-full  m-0  bg-pBlack/70  flex align-middle items-center   '>
        <div className='  container  m-auto p-4 flex flex-col gap-5  items-center align-middle sm:items-start  md:items-start lg:items-start lg:m-'>
          <span className='text-sm uppercase'>New Product</span>
          <h1 className='text-4xl font-bold'>XX99 Mark II <br /> Headphones</h1>
          <p className='text-sm text-center w-1/2 mx-auto sm:text-left sm:ml-0 '>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to='/shop' className='bg-pBrown text-white py-2 px-3 inline-block will-change-auto rounded '>Shop Now</Link>
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection