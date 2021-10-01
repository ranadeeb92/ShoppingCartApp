const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return state.concat(action.payload.products);
    case "PRODUCT_ADDED":
      return state.concat(action.payload.products);
    case "PRODUCT_DELETED":
      return state.filter((p) => p._id !== action.payload.productId);
    case "PRODUCT_UPDATED":
      return state.map((p) =>
        p._id === action.payload.updatedProduct._id
          ? action.payload.updatedProduct
          : p
      );
    case "CARTITEM_ADDED":
      return state.map((p) =>
        p._id === action.payload.cartItem.productId
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );

    default:
      return state;
  }
};

export default products;
