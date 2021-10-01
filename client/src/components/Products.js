import Product from "./Product";
import { productReceived } from "../actions/products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Products({ addToCart, onEdit, onDelete, onAddToCart }) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(productReceived()), [dispatch]);

  const products = useSelector((state) => state.products);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Products;
