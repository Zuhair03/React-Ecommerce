import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import Productdetails from './Productdetails/Productdetails';
import { AllProducts } from './Shop/Products/Allproducts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Shop' element={<Shop />} />
          <Route path='Contact' element={<Contact />} />
          <Route path="/product/:id" element={<Productdetails products={AllProducts} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
