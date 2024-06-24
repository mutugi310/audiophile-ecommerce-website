import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import Button from '../assets/sharedComponents/Button';
import { useNavigate } from 'react-router-dom';

import { FiCheck } from "react-icons/fi";


function ThankYou({onClose}) {
  const {state, dispatch} = useCart()
  const navigate = useNavigate()
  const [isShowLess, setIsShowLess]= useState(true)
  const handleGoBack =()=>{
    onClose()
    navigate('/')
    dispatch({ type: 'REMOVE_ALL' })
  }
  const handleShowLess = ()=>{
    setIsShowLess(!isShowLess)
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full ">
        <FiCheck className='bg-pBrown rounded-2xl text-pWhite size-8'></FiCheck>
        <h2 className="text-2xl font-bold my-4 uppercase ">Thank You <br /> for  Your Order!</h2>
        <p className="  py-4">You willreceive an email confirmation shortly</p>
        <div className="flex flex-col lg:flex-row ">
        <div className={`w-full max-h-[40vh] flex flex-col justify-around lg:w-2/3 bg-pGray px-4`}>
           <div className={`w-full max-h-[60%]  ${!isShowLess?'overflow-clip max-h-[50%]':'overflow-y-auto'} `}>
              {state.cart.map((item) => (
                <div key={item.slug} className="flex  justify-between items-center my-2">
                  <img src={item.image} alt={item.name} className="h-12 w-12" />
                  <div className="flex flex-col">
                    <span>{item.name.replace(/headphones/i, '').trim()}</span>
                    <span className="text-gray-500">${item.price.toLocaleString()}</span>
                  </div>
                  <span>x{item.quantity}</span>
                </div>
              ))}
            </div>
            <Button variant="cta2" onClick={handleShowLess} className="mt-4 items-baseline">{isShowLess? 'See Less': 'See More'}</Button>
          </div>
          <div className="w-full flex flex-col justify-end lg:w-1/3 bg-black text-pWhite pb-6 pl-4">
            <h3 className="text-lg font-bold mb-2">Grand Total</h3>
            <span>${(state.cart.reduce((total, item) => total + item.price * item.quantity, 0) + 50).toLocaleString()}</span>
            
          </div>
        </div>
        <Button variant="cta" onClick={handleGoBack} className="w-full mt-4">Go Back Home</Button>
      </div>
    </div>
  );
}

export default ThankYou;
