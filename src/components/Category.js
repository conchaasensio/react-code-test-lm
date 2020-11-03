import React from 'react';

const Category = (props) => {
  return (
    <div className="collapsible">
      <div className="collapsible__img">
        <img src={props.img} alt="" />
      </div>
      <div className="collapsible__content">
        <span className="collapsible__content-title">{props.name}</span>
        <div className="collapsible__content-hide">
          <img src="./images/ic_hide.svg" alt="Desplegar" />
        </div>
      </div>
    </div>
  );
};

export default Category;
