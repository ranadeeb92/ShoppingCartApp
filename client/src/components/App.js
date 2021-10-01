import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import Form from "./Form";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div id="app">
      <ShoppingCart />
      <main>
        <Products />
        {showForm ? (
          <Form formType="Add" onCancel={() => setShowForm(false)} />
        ) : (
          <p>
            <button
              className="button add-product-button"
              onClick={() => setShowForm(true)}
            >
              Add A Product
            </button>
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
