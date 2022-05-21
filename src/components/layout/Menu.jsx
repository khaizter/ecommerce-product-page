import "../../styles/layout/Menu.scss";
import React, { useState } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="menu">
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
        <div className="menu__overlay">
          <nav className="menu__navigation">
            <ul className="menu__navigation-list">
              <li>
                {" "}
                <a href="#" className="menu__link">
                  Collections
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="menu__link">
                  Men
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="menu__link">
                  Women
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="menu__link">
                  About
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
