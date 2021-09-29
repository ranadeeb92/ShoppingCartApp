import { useState } from "react";
function EditItemForm({ setShowEditForm, product, onEdit }) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...product, title, price, quantity }, () =>
      setShowEditForm(false)
    );
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button className="button" type="submit">
            Update
          </button>
          <button className="button" onClick={() => setShowEditForm(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditItemForm;
