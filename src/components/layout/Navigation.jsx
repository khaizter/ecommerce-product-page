import "../../styles/layout/Navigation.scss";
import React from "react";

const Navigation = ({ className }) => {
  return (
    <nav className={`navigation ${className}`}>
      <ul className="navigation__links">
        <li>
          <a href="#" className="navigation__link">
            Collections
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            Men
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            Women
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
