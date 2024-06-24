import React, { createContext, useContext, useReducer, useEffect } from 'react'
import cartReducer from './cartReducer'

//create cartContext
const CartContext = createContext()
//create cartProvider
export const CartProvider = ({children})=> {
  //initial state
  
    const initialState = {
      cart: JSON.parse(localStorage.getItem('cart')) || []
    
  };
  
  const[state, dispatch] = useReducer(cartReducer,initialState)
  //save state to lacal storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);