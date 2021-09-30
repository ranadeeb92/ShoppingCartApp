const cartItems = (state = [], action) => {
  switch (action.type) {
    case "CARTITEMS_RECEIVED":
      return state.concat(action.payload.cartItems);
    default:
      return state;
  }
}

export default cartItems;