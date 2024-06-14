import React from 'react'
import HeroSection from '../assets/homeComponents/HeroSection'
import ProductsPreview from '../assets/sharedComponents/ProductsPreview'
import ProductDetailsHome from '../assets/homeComponents/ProductDetailsHome'
import ProductPitch from '../assets/sharedComponents/ProductPitch'
import ProductPreviewHome from '../assets/homeComponents/ProductPreviewHome'
import ProductPreviewLarge from '../assets/homeComponents/ProductPreviewLarge'
//import data from '../assets/data/data.json'



function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ProductsPreview></ProductsPreview>
      <ProductDetailsHome></ProductDetailsHome>
      <ProductPreviewHome></ProductPreviewHome>
      <ProductPreviewLarge></ProductPreviewLarge>
      <ProductPitch></ProductPitch>
      
    </div>
  )
}

export default Home