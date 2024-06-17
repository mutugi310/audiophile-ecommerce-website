import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function ProductPage() {
    const {productName}=useParams()
    const navigate= useNavigate()
    //handle navigating back
    const handleGoBack=()=>{
        navigate(-1)
    }
    //nb: btn nGoBack={handleGoBack}
  return (
    <div>ProductPage: {productName}</div>
  )
}

export default ProductPage