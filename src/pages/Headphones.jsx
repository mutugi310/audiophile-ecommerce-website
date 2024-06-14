import React from 'react'
import ProductPitch from '../assets/sharedComponents/ProductPitch'
import ProductsPreview from '../assets/sharedComponents/ProductsPreview'
import HeroBanner from '../assets/sharedComponents/HeroBanner'
import ProductDetailsCard from '../assets/sharedComponents/ProductDetailsCard'
import XX99Mark1ImG from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import XX99Mark2ImG from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import XX59Img from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'

function Headphones(title) {

  return (
    <>
      <HeroBanner title='Headphones' ></HeroBanner>
      <ProductDetailsCard
        productName={'XX59 Headphones'}
        imgSrc={XX99Mark2ImG}
        title={'Speaker 1'}
        description={'Experience the exceptional sound quality with ZX9 Speaker, designed to deliver superior audio performance for your home entertainment.'}
        linkTo={'headphones'}
        reverse={false}
      ></ProductDetailsCard>

       <ProductDetailsCard
        productName={'XX99 Mark I Headphones'} 
        imgSrc={XX99Mark1ImG}
        description={'Experience the exceptional sound quality with ZX9 Speaker, designed to deliver superior audio performance for your home entertainment.'}
        linkTo={'headphones'}
        reverse={true}
      ></ProductDetailsCard>

       <ProductDetailsCard 
        productName={'XX59 Headphones'}
        imgSrc={XX59Img}
        description={'Experience the exceptional sound quality with ZX9 Speaker, designed to deliver superior audio performance for your home entertainment.'}
        linkTo={'headphones'}
        reverse={false}
      ></ProductDetailsCard>
      <ProductsPreview></ProductsPreview>
      <ProductPitch></ProductPitch>
    </>
  )
}

export default Headphones