import React from 'react';
import Category from './Category';

const CategoriesList = (props) => {
  const categories = props.categories.map((category) => {
    return (
      <li className="categories__list-item" key={category.id}>
        <Category name={category.name} img={category.icon} />
      </li>
    );
  });
  return <ul className="categories__list">{categories}</ul>;
};

export default CategoriesList;
