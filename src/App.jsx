import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("brewBeanCart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });

  function clearCart() {
    setCartItems([]);
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      localStorage.removeItem("brewBeanCart");
    } else {
      localStorage.setItem("brewBeanCart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function addToCart(item) {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size,
      );

      if (existingItem) {
        return previousItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      }

      return [...previousItems, { ...item, quantity: item.quantity }];
    });
  }

  function updateQuantity(itemId, itemSize, newQuantity) {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === itemId && item.size === itemSize
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item,
      ),
    );
  }

  function removeItem(itemId, itemSize) {
    setCartItems((previousItems) => {
      const filteredItems = previousItems.filter(
        (cartItem) => cartItem.id !== itemId || cartItem.size !== itemSize,
      );
      return filteredItems;
    });
  }

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/menu/:productId"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          }
        />
        <Route path="/checkout" element={<Checkout clearCart={clearCart} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
