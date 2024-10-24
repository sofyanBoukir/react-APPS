import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Fetch } from './Fetch';
// import { App } from './App';
// import { Panier } from './Panier';
// import { AppSearcher } from './AppSearcher';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <AppSearcher /> */}
    {/* <Panier /> */}
    {/* <App /> */}
    <Fetch />
  </React.StrictMode>
);



reportWebVitals();