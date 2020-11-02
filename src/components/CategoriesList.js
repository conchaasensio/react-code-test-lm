import React from 'react';

const CategoriesList = () => {
  return (
    <ul className="categories__list">
      <li className="categories__list-item">Populares</li>
      <li>
        Frutas y verduras
        <ul className="category__section">
          <li className="category__section-item">Ver toda la sección</li>
          <li>Frutas</li>
          <li>Verduras</li>
        </ul>
      </li>
    </ul>
  );
};

export default CategoriesList;
