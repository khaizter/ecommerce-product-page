import "../../styles/layout/Item.scss";
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import DeleteIcon from "../icon/DeleteIcon";

const Item = ({ item }) => {
  const cartCtx = useContext(CartContext);

  const removeHandler = () => {
    cartCtx.removeItem(item.id);
  };

  return (
    <div className="item">
      <img
        src={item.imageThumbnailPath}
        alt={item.name}
        className="item__image"
      />
      <div className="item__details">
        <div className="item__name">{item.name}</div>
        <div>
          <span className="item__price">${item.price.toFixed(2)}</span>
          <span className="item__quantity"> x {item.quantity} </span>
          <span className="item__total">
            ${(item.quantity * item.price).toFixed(2)}
          </span>
        </div>
      </div>
      <button className="item__delete" onClick={removeHandler}>
        <DeleteIcon className="item__delete-icon" />
      </button>
    </div>
  );
};

export default Item;
