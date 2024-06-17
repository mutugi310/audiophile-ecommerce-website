import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Cart from './pages/Cart'
import Footer from './pages/Footer'
import {Routes, Route} from "react-router-dom"
import ProductPage from './assets/productPages/ProductPage'


function App() {
  

  return (
    <>
      <div className=' max-w-screen min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='headphones' element={<Headphones />} />
            <Route path="/product/:productName" element={<ProductPage />} />
            <Route path='speakers' element={<Speakers />} />
            <Route path='earphones' element={<Earphones />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
     
    </>
  )
}

export default App
