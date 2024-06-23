import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MoreProductDetailsCard from '../sharedComponents/MoreProductDetailsCard '


function ProductPage() {
    const {productName}=useParams()
    const navigate= useNavigate()
    //handle navigating back
    const handleGoBack=()=>{
        navigate(-1)
    }
    
    //nb: btn nGoBack={handleGoBack}
  return (
    <>
      
      <MoreProductDetailsCard 
        productName={productName}
        onGoBack={handleGoBack}
             
      />
    </>
  )
}

export default ProductPage