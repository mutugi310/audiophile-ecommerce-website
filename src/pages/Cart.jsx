import React, { useContext } from 'react';
import {useCart } from '../context/CartContext';
import Button from '../assets/sharedComponents/Button';
import { useNavigate } from 'react-router-dom';




function Cart({onClose}) {
  const { state, dispatch } = useCart();
  const navigate = useNavigate()
  const handleCheckout =()=>{
    onClose()
    navigate('checkout')
  }
  const removeAllItems = () => {
    dispatch({ type: 'REMOVE_ALL' });
  };
  
  return (
    
    <div className='fixed inset-0 flex justify-end bg-black bg-opacity-20 '>
      <div className='bg-white w-fit max-h-[70vh]  p-4 shadow-lg flex fixed flex-col top-16 right-20 overflow-y-auto '>
        <button className=" text-center text-2xl" onClick={onClose}>x</button>
        { (!state.cart || state.cart.length === 0)
        ? (<p className='text-xl text-center bg-green-300  '>Your cart is empty</p>)
        : (<>
        <div className='flex justify-between'>
          <h2 className='text-xl font-bold uppercase bg-white'>Cart</h2>
          <button onClick={removeAllItems} className='text-pBrown'>Remove All</button>
        </div>
        {state.cart?.map(item => {
          //let itemImg = new URL(`../assets/cart/image-${item.slug}.jpg`,import.meta.url).href
          let itemName = item.name
          if (item.name.includes('Headphones')){
            itemName = item.name.replace(/Headphones/i, '').trim()
          }else if (item.name.includes('Earphones')) {
            itemName = item.name.replace(/Earphones/i, '').trim()
          }
         
          return(
          <div key={item.slug} className='flex justify-between py-2 items-center '>
            <div className='flex gap-4 w-2/3'>
              <img src={item.image} alt={item.name} className='h-[5rem]' />
              <div className='flex flex-col gap-2 py-4 justify-center'>
                <h3>{itemName}</h3>
                <p>${item.price.toLocaleString()}</p>
              </div>
            </div>
            

            <div className='bg-pGray w-1/4 flex justify-evenly align-middle'>
              <Button variant='decrement'className='' onClick={()=>{dispatch({ type: 'UPDATE_QUANTITY', payload: { slug: item.slug, quantity: item.quantity - 1 } })}}>-</Button>
              <p className='text-center flex items-center justify-center px-1 '>{item.quantity}</p>
              <Button variant='increment' onClick={()=>{dispatch({ type: 'UPDATE_QUANTITY', payload: { slug: item.slug, quantity: item.quantity + 1 } })}}>+</Button>
            </div>
           
          </div>)}
        )}
        <h2 className=' flex justify-between uppercase'>Total: <span className='font-bold'>${state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</span></h2>
        <Button variant='cta' onClick={handleCheckout} >Checkout</Button>
        </>
        )}
      </div>
    </div>
  );
};

export default Cart