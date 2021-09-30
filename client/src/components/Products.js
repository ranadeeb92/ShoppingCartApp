import Product from "./Product";
import { productReceived } from "../actions/products";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { useEffect } from "react";

function Products({ addToCart, onEdit, onDelete, onAddToCart }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      const products = res.data;
      dispatch(productReceived(products));
    };

    fetchProducts();
  }, [dispatch]);

  const products = useSelector(state => state.products);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product._id}
          addToCart={addToCart}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;
