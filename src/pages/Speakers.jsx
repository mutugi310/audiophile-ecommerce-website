import React from 'react'
import HeroBanner from '../assets/sharedComponents/HeroBanner'
import ProductPitch from '../assets/sharedComponents/ProductPitch'
import ProductDetailsCard from '../assets/sharedComponents/ProductDetailsCard'
import zx9SpeakerImg from '../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx7SpeakerImg from '../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import ProductsPreview from '../assets/sharedComponents/ProductsPreview'

function Speakers() {
  return (
    <>
      <HeroBanner title='Speakers'></HeroBanner>
      <ProductDetailsCard
        productName={'ZX9 Speaker'}
        imgSrc={zx9SpeakerImg}
        linkTo='speakers'
        reverse={false}
      >
      </ProductDetailsCard>

      <ProductDetailsCard
        productName={'ZX7 Speaker'}
        imgSrc={zx7SpeakerImg}
        linkTo='speakers'
        reverse={true}
      >
      </ProductDetailsCard>
      <ProductsPreview></ProductsPreview>
      <ProductPitch></ProductPitch>
    </>
  )
}

export default Speakers