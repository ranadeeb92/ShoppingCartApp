import React, { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import AddItemForm from "./AddItemForm";
import productData from "../lib/productData";
import cartData from "../lib/cartData";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(productData)
    setCartItems(cartData)
  }, []);

  const addToCart = (productID) => {
    // const item = products.find(product => product.id === productID);
    // if (!item) return;

    // const existingItem = cartItems.find(item => item.id === productID);
    // if (!existingItem) setCartItems(cartItems.concat(item))

    // const newItem = Object.assign({}, existingItem);
    // newItem.quantity++;

    // setCartItems(cartItems.filter(item => item.id !== productID).concat(newItem));
  }

  return (
    <div id="app">
      <ShoppingCart items={cartItems} />
      <main>
        <Products addToCart={addToCart} products={products} />
        <AddItemForm />
      </main>

    </div>
  );
};

export default App;
