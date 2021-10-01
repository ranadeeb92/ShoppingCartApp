import { useDispatch } from "react-redux";
import { useState } from "react";
import { productAdded, productUpdated } from "../actions/products";

function Form({ formType, onCancel, product = {} }) {
  const [title, setTitle] = useState(product.title || "");
  const [price, setPrice] = useState(product.price || "");
  const [quantity, setQuantity] = useState(product.quantity || "");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formType === "Add") {
      dispatch(productAdded({ ...product, title, quantity, price }));
    } else if (formType === "Edit") {
      dispatch(productUpdated({ ...product, title, quantity, price }));
    }
  };

  return (
    <div className="add-form visible">
      <h3>{formType} Product</h3>
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
            {formType}
          </button>
          <button className="button" type="button" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
