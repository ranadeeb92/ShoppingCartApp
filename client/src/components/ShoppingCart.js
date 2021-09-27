import CartItem from "./CartItem";

function ShoppingCart({ items }) {
  const calcTotal = () => {
    let total = items.reduce((total, item) => total += (item.price * item.quantity), 0);
    return total.toFixed(2);
  }
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {items.filter(i => i.quantity !== 0).map(item => <CartItem key={item.id} {...item} />)}
          <tr>
            <td colspan="3" className="total">Total: {calcTotal()}</td>
          </tr>
        </table>
        <a className="button checkout">Checkout</a>
      </div>
    </header>
  );
}

export default ShoppingCart;