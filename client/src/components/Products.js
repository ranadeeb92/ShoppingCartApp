import Product from "./Product";
function Products({ addToCart, products, onEdit, onDelete, onAddToCart }) {
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
