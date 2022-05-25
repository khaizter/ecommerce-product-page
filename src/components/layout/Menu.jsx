import "../../styles/layout/Menu.scss";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "../icon/CloseIcon";
import MenuIcon from "../icon/MenuIcon";

const Menu = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`menu ${className}`}>
      <button
        className="menu__toggle"
        onClick={(e) => setShowMenu((prevValue) => !prevValue)}
      >
        {showMenu ? (
          <CloseIcon className="menu__toggle-icon" />
        ) : (
          <MenuIcon className="menu__toggle-icon" />
        )}
      </button>

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showMenu}
        timeout={400}
        classNames={{
          enter: "",
          enterActive: "menu__backdrop--open",
          exit: "",
          exitActive: "menu__backdrop--close",
        }}
      >
        <div className="menu__backdrop" />
      </CSSTransition>

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showMenu}
        timeout={400}
        classNames={{
          enter: "",
          enterActive: "menu__overlay--open",
          exit: "",
          exitActive: "menu__overlay--close",
        }}
      >
        <div className="menu__overlay">
          <Navigation />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Menu;
