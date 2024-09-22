import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Document from './Document';
import Livre from './Livre';
import LastEx from './LastEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Document id={2} dateEdition={"22-04-2018"} />
    <Livre id={6} dateEdition={"21-10-2021"} titre={"Barca"} auteur={"Messi"} />
    <LastEx />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();