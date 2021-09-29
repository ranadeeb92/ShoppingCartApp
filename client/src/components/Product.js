import { useState } from "react";
import Form from "./Form";

function Product({ product, onEdit, onDelete, onAddToCart }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const isInStock = () => {
    return product.quantity > 0;
  };
  const handleDelete = () => {
    onDelete(product._id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(product);
  };

  const handleEdit = (product) => {
    onEdit(product);
    setShowEditForm(false);
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
            onSubmit={handleEdit}
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
