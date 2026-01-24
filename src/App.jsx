import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";
import Shop from "./pages/shop/Shop";
import About from "./pages/about.jsx/About";
import { Outlet } from "react-router-dom";
// import ProductDetil from "./pages/shop/ProductDetail";
import { CartProvider } from "./pages/shop/CartContext";
import Cart from "./pages/shop/Cart";
import ProductCard from "./pages/shop/ProductCard";
import ProductDetails from "./pages/shop/ProductDetails";
import { ToastContainer } from "react-toastify";
import NewArrival from "./pages/shop/NewArrival";
import Checkout from "./pages/shop/CheckOut";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/newarrival" element={<NewArrival />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:id" element={<ProductCard />} />
        </Routes>

        <main>
          <Outlet />
        </main>
        <Footer />

        <ToastContainer position='top-right' autoClose={1200} />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
