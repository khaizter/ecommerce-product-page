import React, { useState } from "react";

const CartContext = React.createContext({
  items: [{}],
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((items) => {
      const itemsCopy = [...items];
      const sameItem = itemsCopy.find(
        (currentItem) => currentItem.id === item.id
      );
      if (sameItem) {
        const index = itemsCopy.findIndex((item) => item === sameItem);
        itemsCopy[index].quantity += item.quantity;
      } else {
        itemsCopy.push(item);
      }
      return itemsCopy;
    });
  };

  const removeItemHandler = (id) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
