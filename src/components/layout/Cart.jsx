import "../../styles/layout/Cart.scss";
import React, { useState, useContext } from "react";
import Button from "../ui/Button";
import CartContext from "../../store/cart-context";
import Item from "./Item";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const checkoutHandler = () => {
    console.log(cartCtx.items);
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
          <div className="cart__items">
            {cartCtx.items.length > 0 ? (
              cartCtx.items.map((item) => {
                return <Item key={item.id} item={item} />;
              })
            ) : (
              <div className="cart__empty">Your cart is empty.</div>
            )}
            {cartCtx.items.length > 0 && (
              <Button onClick={checkoutHandler} className="cart__checkout">
                Checkout
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
