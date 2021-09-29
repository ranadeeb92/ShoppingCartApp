import { useState } from "react";

function AddItemForm({ onSubmit }) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const resetInputs = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, price, quantity }, resetInputs);
  };
  return (
    <div className={`add-form ${visible ? "visible" : ""}`}>
      <p>
        <button
          className="button add-product-button"
          onClick={() => {
            setVisible(true);
          }}
        >
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="product-title">Product Name</label>
          <input
            type="text"
            id="product-title"
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
            Add
          </button>
          <button
            className="button"
            type="button"
            onClick={() => setVisible(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
