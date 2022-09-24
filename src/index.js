import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Details from './composer/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App/>}/>
         {/* <Route path='/produit/:pk' element={<DetailProduit/>}/> */}
        <Route path='/detail/:pk' element={<Details/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
