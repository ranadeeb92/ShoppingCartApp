import Product from "./Product";
function Products({ addToCart, products }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => <Product key={product.id} addToCart={addToCart} {...product} />)}
    </div>
  );
}

export default Products;