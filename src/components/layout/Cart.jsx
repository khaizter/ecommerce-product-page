import "../../styles/layout/Cart.scss";
import React, { useState } from "react";
import Button from "../ui/Button";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const checkoutHandler = () => {
    console.log("checkotu");
  };

  return (
    <div className="cart">
      <button
        className="cart__toggle"
        onClick={(e) => setShowCart((prevValue) => !prevValue)}
      >
        <img src="./images/icon-cart.svg" alt="cart" />
      </button>
      {showCart && (
        <div className="cart__inventory">
          <h1 className="cart__heading">Cart</h1>
          <div className="cart__items"></div>
          <Button onClick={checkoutHandler} className="cart__checkout">
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
