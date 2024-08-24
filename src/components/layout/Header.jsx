import "../../styles/layout/Header.scss";
import React from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import Navigation from "./Navigation";

import logo from "../../assets/logo.svg";
import imageAvatar from "../../assets/image-avatar.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Menu className="header__menu" />
        <a href="#" className="header__logo">
          <img src={logo} alt="sneakers logo" />
        </a>

        <Navigation className="header__navigation" />
      </div>
      <div className="header__right">
        <Cart />
        <a href="#" className="header__avatar">
          <img src={imageAvatar} alt="avatar" />
        </a>
      </div>
    </header>
  );
};

export default Header;
