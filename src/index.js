import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import { Panier } from './Panier';
import { Form } from './Form';
// import { AppSearcher } from './AppSearcher';
// import { App } from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <AppSearcher /> */}
    {/* <App /> */}
    {/* <Panier /> */}
    <Form />
  </React.StrictMode>
);



reportWebVitals();