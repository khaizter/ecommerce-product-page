import "../../styles/layout/Menu.scss";
import React, { useState } from "react";
import Navigation from "./Navigation";

const Menu = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`menu ${className}`}>
      <button
        className="menu__toggle"
        onClick={(e) => setShowMenu((prevValue) => !prevValue)}
      >
        <img
          src={`./images/icon-${showMenu ? "close" : "menu"}.svg`}
          alt="menu"
        />
      </button>
      {showMenu && (
        <div className="menu__backdrop">
          <div className="menu__overlay">
            <Navigation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
