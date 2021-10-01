import axios from "axios";
const apiClient = {
  getProducts: async (callback) => {
    try {
      const res = await axios.get("/api/products");
      const products = res.data;
      callback(products);
    } catch (err) {
      console.error(err);
    }
  },

  addProduct: async (newProduct, callback) => {
    try {
      const res = await axios.post("/api/products", { ...newProduct });
      const product = res.data;
      callback(product);
    } catch (err) {
      console.error(err);
    }
  },

  editProduct: async (updatedProduct, callback) => {
    try {
      const res = await axios.put(`/api/products/${updatedProduct._id}`, {
        ...updatedProduct,
      });
      const product = res.data;
      callback(product);
    } catch (err) {
      console.log(err);
    }
  },

  deleteProduct: async (productId, callback) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      callback();
    } catch (err) {
      console.log(err);
    }
  },

  getCartItems: async (callback) => {
    try {
      const res = await axios.get("/api/cart");
      const cartItems = res.data;
      callback(cartItems);
    } catch (err) {
      console.error(err);
    }
  },

  addCartItem: async (product, callback) => {
    try {
      const itemToAdd = { ...product, productId: product._id };
      const res = await axios.post("/api/cart", { ...itemToAdd });
      const cartItem = res.data;
      callback(cartItem);
    } catch (err) {
      console.log(err);
    }
  },

  checkout: async (callback) => {
    try {
      await axios.post("/api/cart/checkout");
      callback();
    } catch (err) {
      console.log(err);
    }
  },
};

export default apiClient;
