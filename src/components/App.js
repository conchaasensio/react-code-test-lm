import React from 'react';
import Header from './Header';
// import getDataFromApi from './server/api';

function App() {
  return (
    <>
      <Header />
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
