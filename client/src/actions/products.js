import * as types from "../constants/types";
import apiClient from "../lib/apiClient";

export const productReceivedSuccess = (newProducts) => {
  return { type: types.PRODUCTS_RECEIVED, payload: { products: newProducts } };
};

export const productReceived = () => {
  return (dispatch) => {
    apiClient.getProducts((products) => {
      dispatch(productReceivedSuccess(products));
    });
  };
};

export const productAddedSuccess = (newProducts) => {
  return { type: types.PRODUCT_ADDED, payload: { products: newProducts } };
};

export const productAdded = (newProduct) => {
  return (dispatch) => {
    apiClient.addProduct(newProduct, (product) => {
      dispatch(productAddedSuccess(product));
    });
  };
};

export const productDeletedSuccess = (productId) => {
  return { type: types.PRODUCT_DELETED, payload: { productId } };
};
export const productDeleted = (productId) => {
  return (dispatch) => {
    apiClient.deleteProduct(productId, () => {
      dispatch(productDeletedSuccess(productId));
    });
  };
};

export const productUpdatedSuccess = (updatedProduct) => {
  return { type: types.PRODUCT_UPDATED, payload: { updatedProduct } };
};

export const productUpdated = (product) => {
  return (dispatch) => {
    apiClient.editProduct(product, (updatedProduct) => {
      dispatch(productUpdatedSuccess(updatedProduct));
    });
  };
};
