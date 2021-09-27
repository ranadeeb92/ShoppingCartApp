function CartItem({ title, price, quantity }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{quantity * price}</td>
    </tr>
  );
}

export default CartItem;