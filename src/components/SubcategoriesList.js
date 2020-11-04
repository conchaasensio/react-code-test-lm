import React, { useEffect, useState } from 'react';
import { fetchSubCategories } from '../server/api';
import SubCategory from './SubCategory';

const SubcategoriesList = (props) => {
  const subCategories = props.subCategories.map((subCategory) => {
    return (
      <li className="categories__list-item" key={subCategory.id}>
        <SubCategory
          id={subCategory.id}
          name={subCategory.name}
          img={subCategory.icon}
        />
      </li>
    );
  });
  return <ul className="categories__list">{subCategories}</ul>;
};

export default SubcategoriesList;
