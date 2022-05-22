import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { CartContextProvider } from "../src/store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Main />
    </CartContextProvider>
  );
}

export default App;
