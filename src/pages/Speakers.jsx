import React from 'react'
import HeroBanner from '../assets/sharedComponents/HeroBanner'
import ProductPitch from '../assets/sharedComponents/ProductPitch'
import ProductDetailsCard from '../assets/sharedComponents/ProductDetailsCard'
import zx9SpeakerImg from '../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx7SpeakerImg from '../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import ProductsPreview from '../assets/sharedComponents/ProductsPreview'
import { useNavigate } from 'react-router-dom'

function Speakers() {
  
  const navigate = useNavigate()
  const handleClick = (productName) => {
    navigate(`/product/${productName}`);}
  return (
    <>
      <HeroBanner title='Speakers'></HeroBanner>
      <ProductDetailsCard
        productName={'ZX9 Speaker'}
        onSeeMore={()=>handleClick('ZX9 Speaker')}
        reverse={false}
      >
      </ProductDetailsCard>

      <ProductDetailsCard
        productName={'ZX7 Speaker'}
        onSeeMore={()=>handleClick('ZX7 Speaker')}
        reverse={true}
      >
      </ProductDetailsCard>
      <ProductsPreview></ProductsPreview>
      <ProductPitch></ProductPitch>
    </>
  )
}

export default Speakers