import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as Hide } from '../assets/ic_hide.svg';
import SubcategoriesList from './SubcategoriesList';

function Category(props) {
  let params = useParams();
  const url = isShown() ? '/' : `/tienda/mercadona/${props.id}`;
  return (
    <>
      <div className="all">
        <div className="category__container">
          <Link to={url}>
            <div className="category__info">
              <div className="category__icon">
                <img src={props.img} alt="" />
              </div>
              <div className="category__title">
                <span>{props.name}</span>
              </div>
            </div>
            <div className="hide__icon-container">
              {isShown() ? <Hide className="hide__icon" /> : <Hide />}
            </div>
          </Link>
        </div>
        {isShown() ? (
          <div>
            <div className="categories">
              <h3 className="all-section">Ver toda la sección</h3>
            </div>
            <div className="subCategories__container">
              <SubcategoriesList subCategories={props.subCategories} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );

  function isShown() {
    return parseInt(params.categoryId) === props.id;
  }
}

export default Category;
