import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import useProductDetails from '../../hooks/useProductDetails'
import products from '../data/data.json'
import ProductsPreview from './ProductsPreview'
import ProductPitch from './ProductPitch'
import { useCart } from '../../context/CartContext'








function MoreProductDetailsCard({ productName, onGoBack}) {
  const product =useProductDetails(productName) 
  const [quantity, setQuantity]=useState(1)
  const {state, dispatch}= useCart()
  const fullProduct = products.find(product => product.name === productName);
  if (!product || !fullProduct) {
    return <div><p>Product not found!</p></div>
  }
  
  //handle increment
  const handleInecrement=()=>{
    setQuantity(prev=>prev + 1)
  }
  //handle decrement
  const handleDecrement=()=>{
    setQuantity(prev=>(prev > 1? prev - 1: 1))
  }
  //handle adding product to cart
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        slug: product.slug,
        quantity: quantity,
        price: product.price,
        name: product.name,
        image: new URL(`../cart/image-${product.slug}.jpg`, import.meta.url).href,
      },
    });
    alert(`${product.name} added to cart`);
  };
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
              <h3 className='upprcase text-xl font-bold'>$ {fullProduct.price.toLocaleString()}</h3>
              <div className='flex '>
                <div className='bg-pGray'>
                  <Button variant='decrement' onClick={handleDecrement}>-</Button>
                  <span className='bg-pGray'>{quantity}</span>
                  <Button variant='increment' onClick={handleInecrement}>+</Button>
                </div>
                <Button onClick={handleAddToCart} variant='cta' className='w-auto ml-3 uppercase' >Add to cart</Button>
              </div>
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
                  <li key={include.item}><span className='text-pBrown mr-2'>{include.quantity}X</span> {include.item}</li>
                )

                )}
              </ul>
            </div>
          </section>
          <section className='flex flex-col gap-2 flex-nowrap sm:flex-row sm:justify-between '>
           
            <div className=' w-full flex flex-col grow sm:w-[30%] md:w-[30%] lg:w-[35%] sm:justify-between'>
              <div className='firstImage'><img src={product.gallery.first} alt={`${productName} gallery image 1`} /></div>
              <div className='firstImage'><img src={product.gallery.second} alt={`${productName} gallery image 2`} /></div>
            </div>
            <div className=' firstImage w-full grow sm:w-[45%] md:w-[45%] lg:w-[55%]  '>
              <img src={product.gallery.third} alt={`${productName} gallery image 3`} />
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
                
                  <div key={other.name} className='flex flex-col items-center w-full grow'>
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




export default MoreProductDetailsCard