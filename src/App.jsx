
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';

function App() {


  return (
    <div>
      
     <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    <Footer />
  </BrowserRouter>

      
    </div>
  )
}

export default App
