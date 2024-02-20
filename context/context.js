"use client";

import { useState, useContext, createContext, useCallback } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  {
    /*
    const addItem = useCallback(
      (newItem) => setItems((prevItems) => [...prevItems, newItem]),
      []
      );
      */
  }

  const addItem = useCallback(
    price => setItems(prices => prices.concat([price])),
    []
  )

  const removeItem = useCallback(
    (id) => setItems((prices) => prices.filter((price) => price.id !== id)),
    []
  );
  const resetCart = useCallback(() => setItems([]), []);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
