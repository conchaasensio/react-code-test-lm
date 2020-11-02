import React from 'react';
import Category from './Category';

const CategoriesList = () => {
  return (
    <ul className="categories__list">
      <li>
        <Category />
      </li>
    </ul>
  );
};

export default CategoriesList;
