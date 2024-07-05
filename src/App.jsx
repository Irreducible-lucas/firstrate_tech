import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import ButtonGradient from "./assets/svg/ButtonGradient"
import { Footer, Header } from './sections'


const App = () => {
  return (
    <Router> 
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      



    </div>
    <Footer />
      <ButtonGradient />
    </Router>

  )
}

export default App