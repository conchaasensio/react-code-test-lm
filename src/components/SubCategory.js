import React from 'react';

function SubCategory(props) {
  return (
    <>
      <div className="all">
        <div className="category__container">
          <div className="category__info">
            <div className="category__icon">
              <img src={props.img} alt="" />
            </div>
            <div className="category__title">
              <span>{props.name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubCategory;
