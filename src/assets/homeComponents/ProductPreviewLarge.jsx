import React from 'react'
import homeEarphonesImgDesktop from "../home/desktop/image-earphones-yx1.jpg"
import homeEarphonesImgTablet from '../home/tablet/image-earphones-yx1.jpg'
import homeEarphonesImgMobile from "../home/mobile/image-earphones-yx1.jpg"
import Button from '../sharedComponents/Button'
import useResponsiveImage from '../../hooks/useResponsiveImage'



function ProductPreviewLarge() {
  const homeEarphonesImg= useResponsiveImage(homeEarphonesImgDesktop,homeEarphonesImgTablet,homeEarphonesImgMobile)
  return (
        <section className="relative w-full py-4 min-h-30 " >
          <div className='container mx-auto px-4 flex flex-col flex-nowrap gap-2 sm:flex-row lg:px-10   '>
            <div className=' w-full grow '>
              <img src={homeEarphonesImg} alt="YX1 Earphones" />
            </div>
            <div className='bg-pGray flex flex-col justify-center items-center sm:items-start w-full grow gap-4 p-3 '>
              <h2 className="text-4xl font-bold ">ZX7 SPEAKER</h2>
              <Button to='./shop' variant='cta2' className='w-auto border-2 border-black ' >SEE PRODUCT</Button>
             
            </div>
          </div>
        </section>
      )
}
export default ProductPreviewLarge