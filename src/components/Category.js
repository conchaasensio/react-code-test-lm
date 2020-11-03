import React, { useState } from 'react';

function Category(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="collapsible">
      <div className="collapsible__img">
        <img src={props.img} alt="" />
      </div>
      <div className="collapsible__content">
        <span className="collapsible__content-title">{props.name}</span>
        <div
          className="collapsible__content-display"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <img
              className="content__display-hide"
              src="./images/ic_show.svg"
              alt="Desplegar"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
