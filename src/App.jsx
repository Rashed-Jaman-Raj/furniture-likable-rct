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
import ProductDetails from "./pages/shop/ProductDetail";
import ProductDetil from "./pages/shop/ProductDetil";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}

          <Route path="/product/:id" element={<ProductDetil />} />
        </Routes>

        <main>
          <Outlet />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
