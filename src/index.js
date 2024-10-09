import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Products from './Products';
import SingleProduct from './SingleProduct';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();