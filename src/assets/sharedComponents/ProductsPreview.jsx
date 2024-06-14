import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Button from './Button';
import headphoneImg from '../imgs/headphonePreview.png'


function ProductsPreview() {
  return (
    <section className='my-[4rem] pt-[4rem] w-full'>
      <div className='container m-auto flex flex-wrap flex-col gap-[4rem] p-4 align-middle justify-center sm:gap-4 sm:justify-between sm:flex-row lg:px-10  '>
        <div className='bg-pGray flex flex-col  items-center pb-4 sm:w-[30%]'>
          <img src={headphoneImg} alt="headphone image" className='max-w-none w-32 -mt-[4rem]'/>
          <p className="font-bold">Headphone</p>
          <Button to='headphones' variant='shop' className='text-pBlack mx-2 flex  items-center  w-auto'>Shop <IoIosArrowForward className='text-pBrown ml-1'/></Button>
        </div>
        <div className='bg-pGray flex flex-col items-center pb-4 sm:w-[30%] '>
          <img src={headphoneImg} alt="headphone image" className='max-w-none w-32 -mt-[4rem]'/>
          <p className="font-bold">Headphone</p>
          <Button to='speakers' variant='shop' className='text-pBlack mx-2 flex  items-center  w-auto'>Shop <IoIosArrowForward className='text-pBrown ml-1'/></Button>
        </div>
        <div className='bg-pGray flex flex-col items-center pb-4 sm:w-[30%]'>
          <img src={headphoneImg} alt="headphone image" className='max-w-none w-32 -mt-[4rem]'/>
          <p className="font-bold">Headphone</p>
          <Button to='arphones' variant='shop' className='text-pBlack mx-2 flex  items-center  w-auto'>Shop <IoIosArrowForward className='text-pBrown ml-1'/></Button>
        </div>
      </div>
    </section>
    
  )
}

export default ProductsPreview