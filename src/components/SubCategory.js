import React from 'react';

function SubCategory(props) {
  return (
    <>
      <div className="all">
        <div className="subCategory__container">
          <div className="subCategory__info">
            <div className="subCategory__icon">
              <img src={props.img} alt="" />
            </div>
            <div className="subCategory__title">
              <span>{props.name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubCategory;
