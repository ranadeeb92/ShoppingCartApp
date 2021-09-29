import { useState } from "react";
import EditItemForm from "./EditItemForm";

function Product({ product, onEdit, onDelete, onAddToCart }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = () => {
    onDelete(product._id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart({
      productId: product._id,
      title: product.title,
      price: product.price,
    });
  };

  console.log(product.quantity);

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">{product.price}$</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div
          className="actions product-actions"
          style={{ display: showEditForm ? "none" : "block" }}
        >
          <button className="button add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="button edit" onClick={() => setShowEditForm(true)}>
            Edit
          </button>
        </div>
        {showEditForm ? (
          <EditItemForm
            setShowEditForm={setShowEditForm}
            product={product}
            onEdit={onEdit}
          />
        ) : null}
        <a className="delete-button" onClick={handleDelete} href="/#">
          <span>X</span>
        </a>
      </div>
    </div>
  );
}

export default Product;
