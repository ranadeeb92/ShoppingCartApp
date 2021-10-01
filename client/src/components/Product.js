import { useState } from "react";
import { useDispatch } from "react-redux";
import { productDeleted } from "../actions/products";
import { cartItemAdded } from "../actions/cartItems";
import Form from "./Form";

function Product({ product }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const dispatch = useDispatch();

  const isInStock = () => {
    return product.quantity > 0;
  };

  const handleDelete = async (e) => {
    dispatch(productDeleted(product._id));
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    dispatch(cartItemAdded(product));
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">{product.price}$</p>
        <p className="quantity">{product.quantity} left in stock</p>

        {showEditForm ? (
          <Form
            product={product}
            formType="Edit"
            onCancel={() => setShowEditForm(false)}
          />
        ) : (
          <div className="actions product-actions">
            <button
              className={`button add-to-cart ${isInStock() ? "" : "disabled"}`}
              disabled={!isInStock()}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="button edit"
              onClick={() => setShowEditForm(true)}
            >
              Edit
            </button>
          </div>
        )}
        <a className="delete-button" onClick={handleDelete} href="/#">
          <span>X</span>
        </a>
      </div>
    </div>
  );
}

export default Product;
