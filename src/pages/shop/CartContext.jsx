
import { createContext, useContext, useEffect, useState } from "react";



const CartContext = createContext();

export const useCart = ()=> useContext(CartContext);


export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItem');
    return storedCart ? JSON.parse(storedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);



  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ... item, quantity: item.quantity + 1} : item); 
      } else {
        return [ ...prev, { ...product, quantity: 1
        }];
      }
    });
  };


  const updateQuantity = (id, amount) => {
    setCartItems((prev) => 
      prev.map(item => 
        item.id === id 
        ? { ...item, quantity: Math.max
          (1, item.quantity + amount) }
          : item
      )
     );
  };


  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };


  return (
    <CartContext.Provider value = 
    {{cartItems, addToCart, removeFromCart, updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
};