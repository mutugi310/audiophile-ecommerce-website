import React from 'react'
import homeSpeakerBgImgDesktop from "../home/desktop/image-speaker-zx7.jpg"
import homeSpeakerBgImgTablet from '../home/tablet/image-speaker-zx7.jpg'
import homeSpeakerBgImgMobile from "../home/mobile/image-speaker-zx7.jpg"
import Button from '../sharedComponents/Button'
import useResponsiveImage from '../../hooks/useResponsiveImage'


function ProductPreviewHome() {
  const homeSpeakerBGImg = useResponsiveImage(homeSpeakerBgImgDesktop,homeSpeakerBgImgTablet,homeSpeakerBgImgMobile)

  return (
        <section className="relative w-full py-4 min-h-30" >
          <div className='container mx-auto px-4 lg:px-10 '>
            <div className='container mx-auto py-20 flex flex-col items-start p-6 space-y-4 bg-opacity-50 bg-cover bg-no-repeat bg-center'style={{ backgroundImage: `url(${homeSpeakerBGImg})` }}>
              <h2 className="text-4xl font-bold ">ZX7 SPEAKER</h2>
              <Button to='./shop' variant='cta2' className='w-auto border-2 border-black' >SEE PRODUCT</Button>
            </div>
          </div>
        </section>
      )
}

export default ProductPreviewHome