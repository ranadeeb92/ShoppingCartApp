import { useState } from "react";
import EditItemForm from "./EditItemForm";

function Product({ addToCart, id, title, price, quantity }) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions" style={{ display: showEditForm ? "none" : "block" }}>
          <a className="button add-to-cart" onClick={() => addToCart(id)}>Add to Cart</a>
          <a className="button edit" onClick={() => setShowEditForm(true)}>Edit</a>
        </div>
        {showEditForm ? <EditItemForm setShowEditForm={setShowEditForm} /> : null}
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  );
}

export default Product;