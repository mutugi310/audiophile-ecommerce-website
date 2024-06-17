import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import useProductDetails from '../../hooks/useProductDetails'


function MoreProductDetailsCard({ productName, linkTo, onGoBack }) {
  const product =useProductDetails(productName)
  if (!product) {
    return <div><p>Product not found!</p></div>
  }
  return (
    <section className='w-full '>
      
      <div className='container mx-auto py-5'>
        <div><button className='border-none text-pBlack' onClick={onGoBack}>Go Back</button></div>
        <section className='flex flex-col flex-nowrap items-center gap-10 sm:flex-row sm:justify-between '>
          <div className='bg-pGray flex justify-center w-full grow px-4 '>
            <img src={product.categoryImage.desktop} alt={productName } className='h-3/5 lg:h-1/2' />
          </div>
          <div className='flex flex-col items-center text-center w-full grow px-2 sm:items-start sm:text-left gap-6'>
            {product.isNew &&<p className='text-pBrown uppercase'>New Product</p>}
            <h2 className="text-2xl font-bold">{productName}</h2>
            <p className='text-sm sm:text-base'>{product.description}</p>
            <Button to={linkTo} variant='cta' className='w-auto' >See Product</Button>
          </div>
        </section>
        <section className='flex flex-col items-center gap-5 Sm:flex-row '>
          <div>
            <h2>Features</h2>
          </div>
          <div>
            <ul>
              <li>list item 1</li>
              <li>list item 2</li>
              <li>list item 3</li>
              <li>list item 4</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>

          </div>
        </section>
        <section className='w-full py-5'>
          <h3 className='text-xl font-bold'>You may also like</h3>
          <div className='flex flex-wrap justify-center gap-10'>
          {/*   {product.others.map(other => (
              <div key={other.slug} className='flex flex-col items-center'>
                <picture>
                  <source media="(min-width: 1024px)" srcSet={otherImgs.images.desktop} />
                  <source media="(min-width: 768px)" srcSet={otherImgs.images.tablet} />
                  <img src={otherImgs.images.mobile} alt={other.name} className='h-32 w-32' />
                </picture>
                <h4 className='text-lg'>{other.name}</h4>
                <Button to={`/product/${other.slug}`} variant='secondary'>See Product</Button>
              </div>
            ))} */}
          </div>
        </section>
      </div>
    </section>
  
  )
}

MoreProductDetailsCard.propTypes = {
  /* imgSrc: PropTypes.string.isRequired, */
  /* title: PropTypes.string.isRequired, */
 /*  description: PropTypes.string.isRequired, */
  linkTo: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}


export default MoreProductDetailsCard