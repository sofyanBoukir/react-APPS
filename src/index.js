import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ex from './Ex';
import reportWebVitals from './reportWebVitals';
import Exclass from './Exclass';

const personnes = [
      { nom: "Rami", age: 33, estMember: true },
      { nom: "Fatihi", age: 24, estMember: false },
      { nom: "Chakib", age: 45, estMember: true },
      { nom: "Mounir", age: 37, estMember: false },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exclass personnes={personnes}/>
    {/* <Ex /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
