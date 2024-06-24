import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Button from '../assets/sharedComponents/Button'
import cashOnDelIcon from '../assets/checkout/icon-cash-on-delivery.svg'
import ThankYou from './ThankYou'

function Checkout({onClose}) {
    const navigate = useNavigate()
    const {state}= useCart()
    const [showThankYou, setShowThankYou] = useState(false);
    const handleGoBack=()=>{
        navigate(-1)
        onClose()
    }
    const handleContinue = () => {
        alert('Continue to payment');
        setShowThankYou(true)
      };
    const handleGoBackHome=()=>{
      alert('Thankyou for shopping with us')
      setShowThankYou(false)
      navigate('/')
    }
   
    return (
        <div className="container mx-auto p-8 bg-pGray">
          {showThankYou && <ThankYou onClose ={handleGoBackHome }/>}
          <button onClick={handleGoBack} className="text-pGray-500 mb-4">Go Back</button>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <main className="col-span-2 bg-white p-4 shadow-md rounded">
              <h2 className="text-2xl font-bold mb-4">Checkout</h2>
              <form className="space-y-4">
                <fieldset >
                    <legend className='text-pBrown uppercase pb-2'>Billing details</legend>
                <div className='flex flex-col w-full flex-nowrap gap-4 sm:flex-row '>
                    <div className='w-full grow'>
                        <label className="block text-sm font-medium ">Name</label>
                        <input type="text" className="mt-1 w-full  p-2 border border-gray-300 rounded" />
                    </div>
                    <div className='w-full grow'>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" className="mt-1 w-full p-2 border border-gray-300 rounded" />
                    </div>
                </div>
            
                <div>
                  <label className="block text-sm font-medium py-2">Phone</label>
                  <input type="tel" className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded" />
                </div>
                </fieldset>
                <fieldset>
                    <legend className='text-pBrown uppercase pb-2 '>Shopping info</legend>
                    <div>
                        <label className="block text-sm font-medium py-2">Address</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className='flex flex-col w-full flex-nowrap gap-4 sm:flex-row'>
                        <div className='w-full grow'>
                            <label className="block text-sm font-medium py-2">Zip code</label>
                            <input type="text" className="mt-1 w-full  p-2 border border-gray-300 rounded" />
                        </div>
                        <div className='w-full grow'>
                            <label className="block text-sm font-medium py-2">City</label>
                            <input type="email" className="mt-1 w-full p-2 border border-gray-300 rounded" />
                        </div>
                        
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">County</label>
                        <input type="tel" className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend className='text-pBrown uppercase pb-2'>Payment Details</legend>
                    <div className='flex flex-col flex-nowrap fle md:flex-row'>
                        <div className=' w-full grow '>
                            <h3 className='uppercase'>Payment method</h3>
                        </div>

                        <div className=' w-full grow flex flex-col gap-4 '>
                            <div className='flex gap-2 border-2 border-pBrown p-4 rounded'>
                                <input type="radio" id='e-money' name='payment-details' value='E-money' className=''/>   
                                <label htmlFor="e-money">E-money</label>
                               
                            </div>
                           
                            <div className='flex gap-2 border-2 border-pBrown p-4 rounded'>
                                <input type="radio" id='Cash-on-delivery' name='payment-details' value='Cash-on-delivery' className=''/>
                                <label htmlFor="Cash-on-delivery">Cash on Delivery</label>
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className='flex p-6' >
                      <img src={cashOnDelIcon} alt=" cash on delivery icon"  />   <p className='pl-2'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                </fieldset>
                
              </form>

            </main>
            
            <aside className="bg-white p-4 shadow-md rounded h-fit">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              {state.cart.map((item) => (
                <div key={item.slug} className="flex justify-between items-center mb-4">
                  <img src={item.image} alt={item.name} className="h-16 w-16" />
                  <div className="flex flex-col">
                    <span>{item.name.replace(/headphones/i, '').trim()}</span>
                    <span className="text-gray-500">${item.price.toLocaleString()}</span>
                  </div>
                  <span>x{item.quantity}</span>
                </div>
              ))}
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>${state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${(state.cart.reduce((total, item) => total + item.price * item.quantity, 0) * 0.01).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (Included)</span>
                  <span>${(state.cart.reduce((total, item) => total + item.price * item.quantity, 0) * 0.2).toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Grand Total</span>
                  <span>${(state.cart.reduce((total, item) => total + item.price * item.quantity, 0) 
                  + (state.cart.reduce((total, item) => total + item.price * item.quantity, 0) * 0.01)  
                  + (state.cart.reduce((total, item) => total + item.price * item.quantity, 0) * 0.2) 
                  ).toLocaleString()}
                </span>
                </div>
              </div>
              <Button variant="cta" onClick={handleContinue} className="w-full mt-4">Continue</Button>
            </aside>
          </div>
        </div>
      ); 
    
}

export default Checkout