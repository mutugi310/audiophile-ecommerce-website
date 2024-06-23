import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Cart from './pages/Cart'
import Footer from './pages/Footer'
import Checkout from './pages/Checkout'
import {Routes, Route} from "react-router-dom"
import ProductPage from './assets/productPages/ProductPage'
import {CartProvider} from './context/CartContext'
import { useState } from 'react'

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
            <Routes>
              <Route path='/'  element={<Home />} />
              <Route path='headphones' element={<Headphones />} />
              <Route path="/product/:productName" element={<ProductPage />} />
              <Route path='speakers' element={<Speakers />} />
              <Route path='earphones' element={<Earphones />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='checkout' element={<Checkout onClose={toggleCart} />} />
            </Routes>
          </main>
          <Footer />
          {isCartOpen && <Cart onClose={toggleCart} />}
        </div>
      </CartProvider>
     
    </>
  )
}

export default App
