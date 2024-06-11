import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductsPreview from '../sharedComponents/ProductsPreview'
import ProductPitch from '../sharedComponents/ProductPitch'
import ProductDetails from '../sharedComponents/ProductDetails'
import ProductPreviewHome from '../components/ProductPreviewHome'
import ProductPreviewLarge from '../sharedComponents/ProductPreviewLarge'
import data from '../assets/data/data.json'

function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ProductsPreview></ProductsPreview>
      <ProductDetails></ProductDetails>
      <ProductPreviewHome></ProductPreviewHome>
      <ProductPreviewLarge></ProductPreviewLarge>
      <ProductPitch></ProductPitch>
      
    </div>
  )
}

export default Home