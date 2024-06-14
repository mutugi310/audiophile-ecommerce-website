import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import useProductDetails from '../../hooks/useProductDetails'


function ProductDetailsCard({ productName, imgSrc, linkTo, reverse=false }) {
  const product =useProductDetails(productName)
  if (!product) {
    return <div><p>Product not found!</p></div>
  }
  return (
    <section className='w-full py-5'>
      <div className={`container mx-auto flex flex-col flex-nowrap items-center gap-10 ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:justify-between  p-8`}>
        <div className='bg-pGray flex justify-center w-full grow px-4 '>
          <img src={imgSrc} alt={productName } className='h-3/5 lg:h-1/2' />
        </div>
        <div className={`flex flex-col items-center text-center w-full grow px-2 sm:items-start sm:text-left gap-6 ${reverse ? 'sm:pr-7' : 'sm:pl-7'}`}>
          {product.isNew &&<p className='text-pBrown uppercase'>New Product</p>}
          <h2 className="text-2xl font-bold">{productName}</h2>
          <p className='text-sm sm:text-base'>{product.description}</p>
          <Button to={linkTo} variant='cta' className='w-auto' >See Product</Button>
        </div>
      </div>
    </section>
  )
}

ProductDetailsCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}


export default ProductDetailsCard