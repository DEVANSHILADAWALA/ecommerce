import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Login from './Login';
import Register from './Register';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import OrderTable from './OrderTable';
import Checkout from './CheckOut';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Contact from './Contact';
import CheckOutDetail from './CheckOutDetail';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productdetail/:pid" element={<ProductDetail />} />
      <Route path="/ordertable" element={<OrderTable />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/CheckOutDetail" element={<CheckOutDetail />} />
    </Routes>
    <Footer />   
  </BrowserRouter>
);
