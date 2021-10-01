import * as types from "../constants/types";
import apiClient from "../lib/apiClient";

export const cartItemsReceivedSuccess = (cartItems) => {
  return { type: "CARTITEMS_RECEIVED", payload: { cartItems } };
};

export const cartItemsReceived = () => {
  return (dispatch) => {
    apiClient.getCartItems((cartItems) => {
      dispatch(cartItemsReceivedSuccess(cartItems));
    });
  };
};

export const cartItemAddedSuccess = (cartItem) => {
  return { type: "CARTITEM_ADDED", payload: { cartItem } };
};

export const cartItemAdded = (product) => {
  return (dispatch) => {
    apiClient.addCartItem(product, (cartItem) => {
      dispatch(cartItemAddedSuccess(cartItem));
    });
  };
};

export const cartItemsCheckoutSuccess = () => {
  return { type: types.CARTITEMS_CHECKOUT, payload: { cartItems: [] } };
};

export const cartItemsCheckout = () => {
  return (dispatch) => {
    apiClient.checkout(() => {
      dispatch(cartItemsCheckoutSuccess());
    });
  };
};
