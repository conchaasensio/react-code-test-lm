import React from 'react';
// import getDataFromApi from './server/api';
import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <img src="" alt="" />
        <h1>Mercadona</h1>
        <span>Comprando en 28010</span>
      </div>
      <ul className="category-list">
        <li>
          <img src="" alt="" />
          <span>Populares</span>
        </li>
        <li>
          <img src="" alt="" />
          <span>Frutas y Verduras</span>
          <ul>
            <li>Ver toda la sección</li>
            <li>Frutas</li>
            <li>Verduras</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default App;
