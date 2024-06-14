import React from 'react'
import HeroBanner from '../assets/sharedComponents/HeroBanner'
import ProductsPreview from '../assets/sharedComponents/ProductsPreview'
import ProductPitch from '../assets/sharedComponents/ProductPitch'
import ProductDetailsCard from '../assets/sharedComponents/ProductDetailsCard'
import zx7SpeakerImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'




function Earphones() {
  return (
    <>
     <HeroBanner title='Earphones'></HeroBanner>
     <ProductDetailsCard
      productName={'YX1 Wireless Earphones'}
      imgSrc={zx7SpeakerImg}
      linkTo='earphones'
      reverse={false}
     >
     </ProductDetailsCard>
     <ProductsPreview></ProductsPreview>
     <ProductPitch></ProductPitch>
    </>
  )
}

export default Earphones