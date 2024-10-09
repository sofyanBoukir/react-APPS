import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Products from './Products';
import SingleProduct from './SingleProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Header />
      <Products />
      {/* <SingleProduct /> */}
  </React.StrictMode>
);



reportWebVitals();