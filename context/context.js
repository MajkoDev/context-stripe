'use client'

import { createContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export default CartProvider;
