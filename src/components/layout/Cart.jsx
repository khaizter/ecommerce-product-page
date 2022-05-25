import "../../styles/layout/Cart.scss";
import React, { useState, useContext, useEffect } from "react";
import Button from "../ui/Button";
import CartContext from "../../store/cart-context";
import Item from "./Item";
import CartIcon from "../icon/CartIcon";
import { CSSTransition } from "react-transition-group";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [toggleIsBump, setToggleIsBump] = useState(false);
  const { items } = useContext(CartContext);

  useEffect(() => {
    if (items.length === 0) return;
    setToggleIsBump(true);

    const timer = setTimeout(() => {
      setToggleIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const checkoutHandler = () => {
    console.log(items);
  };

  const toggleClassNames = `cart__toggle ${
    toggleIsBump ? "cart__toggle--bump" : ""
  }`;

  return (
    <div className="cart">
      <button
        className={toggleClassNames}
        onClick={(e) => setShowCart((prevValue) => !prevValue)}
      >
        <CartIcon className="cart__toggle-icon" />
      </button>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showCart}
        timeout={300}
        classNames={{
          enter: "",
          enterActive: "cart__inventory--open",
          exit: "",
          exitActive: "cart__inventory--close",
        }}
      >
        <div className="cart__inventory">
          <h1 className="cart__heading">Cart</h1>
          <div className="cart__items">
            {items.length > 0 ? (
              items.map((item, index) => {
                return <Item key={index} item={item} />;
              })
            ) : (
              <div className="cart__empty">Your cart is empty.</div>
            )}
            {items.length > 0 && (
              <Button onClick={checkoutHandler} className="cart__checkout">
                Checkout
              </Button>
            )}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Cart;
