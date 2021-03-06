import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartItemsCheckout, cartItemsReceived } from "../actions/cartItems";
import { useEffect } from "react";

function ShoppingCart() {
  const dispatch = useDispatch();
  const calcTotal = (items) => {
    let total = items.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );
    return total.toFixed(2);
  };

  const handleCheckout = async () => {
    dispatch(cartItemsCheckout());
  };

  useEffect(() => dispatch(cartItemsReceived()), [dispatch]);

  const cartItems = useSelector((state) => state.cartItems);

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
            {cartItems
              .filter((i) => i.quantity !== 0)
              .map((item) => {
                console.log(item);
                return <CartItem key={item._id} {...item} />;
              })}
            <tr>
              <td colSpan="3" className="total">
                Total: {calcTotal(cartItems)}
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
