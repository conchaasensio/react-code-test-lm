import React, { useState } from 'react';
import { ReactComponent as Hide } from '../assets/ic_hide.svg';

function Category(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="all">
        <div className="category__container">
          <button onClick={() => setIsShown(!isShown)}>
            <div className="category__info">
              <div className="category__icon">
                <img src={props.img} alt="" />
              </div>
              <div className="category__title">
                <span>{props.name}</span>
              </div>
            </div>
            <div className="hide__icon-container">
              {isShown ? <Hide /> : <Hide className="hide__icon" />}
            </div>
          </button>
        </div>
        {isShown ? (
          <div>
            <div className="categories">
              <h3 className="allsection">Ver toda la sección</h3>
            </div>
            <div className="subcategories__container">
              <ul>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
              </ul>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {/* <div className="collapsible">
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
    </div> */}
    </>
  );
}

export default Category;
