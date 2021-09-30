import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import Form from "./Form";
import axios from "axios";

const App = () => {
  // const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const updateCartItems = (itemToAdd, addedItem) => {
    // if (cartItems.find((item) => item.productId === itemToAdd.productId)) {
    //   setCartItems(
    //     cartItems.map((item) =>
    //       item.productId === itemToAdd.productId ? addedItem : item
    //     )
    //   );
    // } else {
    //   setCartItems(cartItems.concat(addedItem));
    // }
  };

  const handleAddToCart = async (product) => {
    try {
      const itemToAdd = {
        productId: product._id,
        title: product.title,
        price: product.price,
      };
      const res = await axios.post("/api/cart", { ...itemToAdd });
      const data = res.data;
      await handleProductUpdate({ ...product, quantity: product.quantity - 1 });
      updateCartItems(itemToAdd, data);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleAddProduct = async (product) => {
  //   try {
  //     const res = await axios.post("/api/products", { ...product });
  //     const data = res.data;
  //     // setProducts(products.concat(data));
  //     setShowForm(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleProductUpdate = async (product) => {
    try {
      const res = await axios.put(`/api/products/${product._id}`, {
        ...product,
      });
      const data = res.data;
      // setProducts(products.map((p) => (p._id === product._id ? data : p)));
    } catch (err) {
      console.log(err);
    }
  };

  const handleProductDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      // setProducts(products.filter((p) => p._id !== productId));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckout = async (callback) => {
    try {
      await axios.post("/api/cart/checkout");
      // setCartItems([]);
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="app">
      <ShoppingCart onCheckout={handleCheckout} />
      <main>
        <Products
          onEdit={handleProductUpdate}
          onDelete={handleProductDelete}
          onAddToCart={handleAddToCart}
        />
        {showForm ? (
          <Form
            formType="Add"
            onCancel={() => setShowForm(false)}
          />
        ) : (
          <p>
            <button
              className="button add-product-button"
              onClick={() => setShowForm(true)}
            >
              Add A Product
            </button>
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
