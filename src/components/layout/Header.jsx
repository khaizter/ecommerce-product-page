import "../../styles/layout/Header.scss";
import React from "react";
import Menu from "./Menu";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Menu />
        <img
          src="./images/logo.svg"
          alt="sneakers logo"
          className="header__logo"
        />
      </div>
      <div className="header__right">
        <Cart />
        <img
          src="./images/image-avatar.png"
          alt="avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
};

export default Header;
