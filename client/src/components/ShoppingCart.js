import CartItem from "./CartItem";

function ShoppingCart({ items, onCheckout }) {
  const calcTotal = () => {
    let total = items.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );
    return total.toFixed(2);
  };

  const handleCheckout = () => {
    onCheckout();
  };
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items
              .filter((i) => i.quantity !== 0)
              .map((item) => (
                <CartItem key={item._id} {...item} />
              ))}
            <tr>
              <td colSpan="3" className="total">
                Total: {calcTotal()}
              </td>
            </tr>
          </tbody>
        </table>
        <button className="button checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </header>
  );
}

export default ShoppingCart;