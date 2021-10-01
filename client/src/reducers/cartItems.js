const updateCartItems = (state, action) => {
  if (
    state.find((item) => item.productId === action.payload.cartItem.productId)
  ) {
    return state.map((item) =>
      item.productId === action.payload.cartItem.productId
        ? action.payload.cartItem
        : item
    );
  } else {
    return state.concat(action.payload.cartItem);
  }
};

const cartItems = (state = [], action) => {
  switch (action.type) {
    case "CARTITEMS_RECEIVED":
      return state.concat(action.payload.cartItems);
    case "CARTITEM_ADDED":
      return updateCartItems(state, action);
    case "CARTITEMS_CHECKOUT":
      return [];
    default:
      return state;
  }
};

export default cartItems;
