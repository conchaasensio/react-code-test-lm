import React from 'react';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__container-logo">
        <img
          className="header__logo"
          src="./images/ic_circled_super.png"
          alt="Logo Mercadona"
        />
      </div>
      <div className="header__container-text">
        <h1 className="header__title">Mercadona</h1>
        <span className="header__postalcode">Comprando en 28010</span>
      </div>
    </div>
  );
};
export default Header;
