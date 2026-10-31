import { useState } from "react";
import { Routes, Route } from "react-router";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

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

  function updateQuantity() {}

  function removeItem(itemId, itemSize) {
    setCartItems((previousItems) => {
      const filteredItems = previousItems.filter(
        (cartItem) =>
          cartItem.id !== cartItem.id || itemSize.size !== cartItem.size,
      );
      return filteredItems;
    });
  }

  console.log("this is cart items selected ", cartItems);
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
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
