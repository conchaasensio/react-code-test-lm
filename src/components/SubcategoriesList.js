import React from 'react';
import SubCategory from './SubCategory';

const SubcategoriesList = (props) => {
  const subCategories = props.subCategories.map((subCategory) => {
    return (
      <li className="subCategories__list-item" key={subCategory.id}>
        <SubCategory
          id={subCategory.id}
          name={subCategory.name}
          img={subCategory.icon}
        />
      </li>
    );
  });
  return <ul className="subCategories__list">{subCategories}</ul>;
};

export default SubcategoriesList;
