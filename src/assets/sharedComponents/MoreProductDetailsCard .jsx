import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import useProductDetails from '../../hooks/useProductDetails'
import products from '../data/data.json'
import ProductsPreview from './ProductsPreview'
import ProductPitch from './ProductPitch'




function MoreProductDetailsCard({ productName, linkTo, onGoBack}) {
  const product =useProductDetails(productName) 
  const fullProduct = products.find(product => product.name === productName);
  if (!product || !fullProduct) {
    return <div><p>Product not found!</p></div>
  }
  return (
    <>
      <section className='w-full '>
        
        <div className='container mx-auto py-5 px-8'>
          <div><button className='border-none text-pBlack py-10' onClick={onGoBack}>Go Back</button></div>
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
          <section className='flex flex-col items-center py-6 gap-5 flex-nowrap lg:flex-row    '>
            <div className=' w-full grow lg:w-[45%] '>
              <h2 className='text-2xl font-bold uppercase'>Features</h2>
              <p>{fullProduct.features}</p>
            </div>
            <div className=' w-full grow flex flex-col sm:flex-row lg:flex-col lg:w-[35%] lg:pl-10  '>
              <h2 className='text-2xl font-bold uppercase w-full grow '>In the Box</h2>
              <ul className='w-full grow text-start'>
                {fullProduct.includes.map(include => (
                  <li><span>{include.quantity}</span>{include.item}</li>
                )

                )}
              </ul>
            </div>
          </section>
          <section className='flex flex-col gap-2 flex-nowrap sm:flex-row '>
           
            <div className=' w-full flex flex-col grow sm:w-[35%] sm:justify-between'>
              <div className='firstImage'><img src={product.gallery.first} alt="" /></div>
              <div className='firstImage'><img src={product.gallery.second} alt="" /></div>
            </div>
            <div className=' firstImage w-full grow sm:w-[50%]  '>
              <img src={product.gallery.third} alt="" className=''/>
            </div>
          </section>
          <section className='w-full py-5'>
            <h2 className='text-2xl font-bold uppercase sm:text-center'>You may also like</h2>
            <div className='flex flex-nowrap flex-col justify-center gap-10 sm:flex-row'>
              {fullProduct.others.map(other => {
                const otherImg = new URL(`../shared/desktop/image-${other.slug}.jpg`,import.meta.url).href
                let navigatePath =other.name
                if (other.slug.includes('headphones') ) {
                  navigatePath = `${other.name} Headphones`
                } 
                
                return (
                  <>
                
                  <div key={other.slug} className='flex flex-col items-center w-full grow'>
                    <div>
                      <img src={otherImg} alt={other.name} className='' />
                    </div>                
                    
                    <h4 className='text-lg py-2'>{other.name}</h4>
                    <Button to={`/product/${navigatePath} `} variant='cta'>See Product</Button> 
                  </div>
                </>
              )})}
            </div>
          </section>
        </div>
      </section>
      <ProductsPreview></ProductsPreview>
      <ProductPitch></ProductPitch>

    </>
  )
}

MoreProductDetailsCard.propTypes = {
  /* imgSrc: PropTypes.string.isRequired, */
  /* title: PropTypes.string.isRequired, */
 /*  description: PropTypes.string.isRequired, */
  linkTo: PropTypes.string,
  reverse: PropTypes.bool,
}


export default MoreProductDetailsCard