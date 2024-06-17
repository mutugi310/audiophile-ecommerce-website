import React from 'react'
import HeroBanner from '../assets/sharedComponents/HeroBanner'
import ProductsPreview from '../assets/sharedComponents/ProductsPreview'
import ProductPitch from '../assets/sharedComponents/ProductPitch'
import ProductDetailsCard from '../assets/sharedComponents/ProductDetailsCard'
import yX1EarphonesImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import { useNavigate } from 'react-router-dom'




function Earphones() {
  const navigate = useNavigate()
  const handleClick = (productName) => {
    navigate(`/product/${productName}`);}
  return (
    <>
     <HeroBanner title='Earphones'></HeroBanner>
     <ProductDetailsCard
      productName={'YX1 Wireless Earphones'}
      onSeeMore={()=>handleClick('YX1 Wireless Earphones')}
      reverse={false}
     >
     </ProductDetailsCard>
     <ProductsPreview></ProductsPreview>
     <ProductPitch></ProductPitch>
    </>
  )
}

export default Earphones