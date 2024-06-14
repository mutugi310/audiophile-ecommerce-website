import React from 'react'
import heroImgDesktop from "../home/desktop/image-hero.jpg"
import heroImgTablet from '../home/tablet/image-header.jpg'
import heroImgMobile from "../home/mobile/image-header.jpg"
import Button from '../sharedComponents/Button'
import useResponsiveImage from '../../hooks/useResponsiveImage'



function HeroSection() {
  const heroBgImg = useResponsiveImage(heroImgDesktop,heroImgTablet,heroImgMobile)
 
  
  return (
    <section className=" text-pWhite flex items-center  relative bg-cover bg-center bg-no-repeat h-screen " style={{ backgroundImage: `url(${heroBgImg})` }}>
      <div className='w-full h-full  m-0  bg-pBlack/100  flex align-middle items-center   '>
        <div className='  container  m-auto p-4 flex flex-col gap-5 items-center align-middle lg:items-start lg:px-10 '>
          <span className='text-sm uppercase'>New Product</span>
          <h1 className='text-4xl font-bold'>XX99 Mark II <br /> Headphones</h1>
          <p className='text-sm text-center w-1/2 mx-auto lg:text-left lg:ml-0 '>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button to="headphonesp" variant="cta" className="mt-4">SEE PRODUCT </Button>
          {/* <Link to='headphones' className='bg-pBrown text-white py-2 px-3 inline-block will-change-auto rounded '>Shop Now</Link> */}
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection