import React, { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import AddItemForm from "./AddItemForm";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      const data = res.data;
      setProducts(data);
    };

    const fetchCartItems = async () => {
      const res = await axios.get("/api/cart");
      const data = res.data;
      setCartItems(data);
    };

    fetchProducts();
    fetchCartItems();
  }, []);

  const handleAddToCart = async (product, callback) => {
    try {
      const res = await axios.post("/api/cart", { ...product });
      const data = res.data;

      if (cartItems.find((i) => i.productId === product.productId)) {
        setCartItems(
          cartItems.map((item) => {
            return item.productId === product.productId ? data : item;
          })
        );
      } else {
        setCartItems(cartItems.concat(data));
      }

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (product, callback) => {
    try {
      const res = await axios.post("/api/products", { ...product });
      const data = res.data;
      setProducts(products.concat(data));
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (product, callback) => {
    try {
      const res = await axios.put(`/api/products/${product._id}`, {
        ...product,
      });
      const data = res.data;
      setProducts(
        products.map((p) => {
          if (p._id === product._id) {
            return data;
          } else {
            return p;
          }
        })
      );
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (productId, callback) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      setProducts(products.filter((p) => p._id !== productId));
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckout = async (callback) => {
    try {
      await axios.post("/api/cart/checkout");
      setCartItems([]);
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="app">
      <ShoppingCart items={cartItems} onCheckout={handleCheckout} />
      <main>
        <Products
          products={products}
          onEdit={handleUpdate}
          onDelete={handleDelete}
          onAddToCart={handleAddToCart}
        />
        <AddItemForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
