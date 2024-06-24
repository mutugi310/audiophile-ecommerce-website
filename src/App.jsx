import {Routes, Route} from "react-router-dom"
import {CartProvider} from './context/CartContext'
import React, { useState,lazy, Suspense } from 'react'
import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'


const Headphones = lazy(()=> import('./pages/Headphones'))
const Speakers = lazy(()=> import('./pages/Speakers'))
const Earphones = lazy(()=> import('./pages/Earphones'))
const Cart = lazy(()=> import('./pages/Cart'))
const Checkout = lazy(()=> import('./pages/Checkout'))
const ProductPage = lazy(()=> import('./assets/productPages/ProductPage'))



function App() {
   const [isCartOpen, setIsCartOpen] = useState(false)
   const toggleCart= ()=>{
    setIsCartOpen(!isCartOpen)
   }
   

  return (
    <>
      <CartProvider>
        <div className=' max-w-screen min-h-screen flex flex-col'>
          <Header handleCartOpen={toggleCart} />
          <main className='flex-grow'>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='headphones' element={<Headphones />} />
                <Route path="/product/:productName" element={<ProductPage />} />
                <Route path='speakers' element={<Speakers />} />
                <Route path='earphones' element={<Earphones />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='checkout' element={<Checkout onClose={toggleCart} />} />
                
              </Routes>
            </Suspense>
          </main>
          <Footer />
          {isCartOpen && <Cart onClose={toggleCart} />}
        </div>
      </CartProvider>
     
    </>
  )
}

export default App
