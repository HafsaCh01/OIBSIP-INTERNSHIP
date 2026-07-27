import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item) => {
    setItems((prev) => [...prev, { ...item, cartId: Date.now() + Math.random() }]);
    setIsOpen(true);
  };

  const removeItem = (cartId) => {
    setItems((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, total, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
