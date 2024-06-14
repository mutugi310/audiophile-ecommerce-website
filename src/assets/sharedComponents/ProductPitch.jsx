import React from 'react'
import bestGearImgDesktop from '../shared/desktop/image-best-gear.jpg'
import bestGearImgTablet from '../shared/tablet/image-best-gear.jpg'
import bestGearImgMobile from '../shared/mobile/image-best-gear.jpg'
import useResponsiveImage from '../../hooks/useResponsiveImage'

function ProductPitch() {
  const bestGearImg = useResponsiveImage(bestGearImgDesktop,bestGearImgTablet,bestGearImgMobile)
  return (
    <section className='w-full py-14'>
      <div className='container mx-auto flex flex-col p-4 gap-6 flex-nowrap md:flex-row lg:px-10 '>
      <div className='bg-pGray w-full grow order-1 md:order-2'>
          <img src={bestGearImg} alt="Man wearing headphones"className='w-full' />
        </div>
        <div className=' w-full grow order-1 flex flex-col items-center text-center justify-center px-4 md:p-0 md:pr-10 lg:pr-10 md:items-start md:text-start md:order-1'>
          <h2 className="text-2xl font-bold uppercase py-3 ">Bringing you the <br className='inline-block sm:hidden lg:inline-block' /><span className='text-pBrown'>best</span> <br className='hidden sm:inline-block lg:hidden' /> audio gear</h2>
          <p className='text-sm sm:text-base py-3 '>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductPitch