import React from 'react'
import Button from '../sharedComponents/Button'
import speakerZx9Img from '../home/desktop/image-speaker-zx9.png'
import circlePattern from '../home/desktop/pattern-circles.svg'


function ProductDetailsHome() {
  return (
    <section className='w-full pb-8  '>
      <div className='container mx-auto px-4 lg:px-10 '>
        <div className=' flex flex-col flex-nowrap items-center gap-4 pb-2 md:pb-0 sm:flex-row sm:justify-evenly bg-[#D87D4A] pt-12'
        style={{backgroundImage: `url(${circlePattern})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}
        >
          <div className=' flex justify-center w-full grow  '>
            <img src={speakerZx9Img} alt="Speaker ZX9" className='w-3/5 sm:w-2/3 lg:w-1/2' />
          </div>
          <div className=' flex-col items-center text-center gap-3 w-full grow sm:text-start sm:items-start sm:mr-20   '>
            <h2 className="text-2xl font-bold py-3">ZX9 Speaker</h2>
            <p className='text-sm sm:text-base py-3 '>Experience the exceptional sound quality with ZX9 Speaker, designed to deliver superior audio performance for your home entertainment.</p>
            <Button to='/shop' variant='cta2' className='w-auto border-2 border-black'>See Product</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsHome