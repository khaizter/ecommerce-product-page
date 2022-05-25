import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { CartContextProvider } from "../src/store/cart-context";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Main />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
