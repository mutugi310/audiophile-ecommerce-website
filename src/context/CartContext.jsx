import React, { createContext, useContext, useReducer } from 'react'
import cartReducer from './cartReducer'

//create cartContext
const CartContext = createContext()
//create cartProvider
export const CartProvider = ({children})=> {
  //initial state
  const initialState={
    cart:[]
  }
  const[state, dispatch] = useReducer(cartReducer,initialState)
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);