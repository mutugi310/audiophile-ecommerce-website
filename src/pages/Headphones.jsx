import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductPitch from '../assets/sharedComponents/ProductPitch'
import ProductsPreview from '../assets/sharedComponents/ProductsPreview'
import HeroBanner from '../assets/sharedComponents/HeroBanner'
import ProductDetailsCard from '../assets/sharedComponents/ProductDetailsCard'
import XX99Mark1ImG from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import XX99Mark2ImG from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import XX59Img from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
//import products from '../assets/data/data.json'



function Headphones() {
  //const [reverseDiv, setReverseDiv] = useState(false)
 
  const navigate = useNavigate()
  const handleClick = (productName) => {
    navigate(`/product/${productName}`);}

  //const headphones = products.filter(product => product.category === 'headphones');
  return (
    <>
      <HeroBanner title='Headphones' ></HeroBanner>
     
      {/* <div className="headphones-page">
        {headphones.map((product) => (
          <ProductDetailsCard
            key={product.id}
            productName={product.name}
            productSlag={product.slug}
            description={product.description}
            image={product.image}
            onSeeMore={() => handleClick(product.name)}
            reverse={reverseDiv}
          />
          
        ))}
      </div> */}
     
      <ProductDetailsCard
        productName= {"XX99 Mark II Headphones"}
        onSeeMore={()=>handleClick("XX99 Mark II Headphones")}
        reverse={false}
      ></ProductDetailsCard>  
            
       <ProductDetailsCard
        productName={'XX99 Mark I Headphones'}
        onSeeMore={()=>handleClick('XX99 Mark I Headphones')}
        reverse={true}
      ></ProductDetailsCard>

       <ProductDetailsCard 
        productName={'XX59 Headphones'}
        onSeeMore={()=>handleClick('XX59 Headphones')}
        reverse={false}
      ></ProductDetailsCard>
      <ProductsPreview></ProductsPreview>
      <ProductPitch></ProductPitch>
    </>
  )
}

export default Headphones