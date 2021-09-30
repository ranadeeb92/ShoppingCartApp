import * as types from "../constants/types";

export const productReceived = (newProducts) => {
  return { type: types.PRODUCTS_RECEIVED, payload: { products: newProducts } };
}

export const productAdded = (newProducts) => {
  return { type: types.PRODUCT_ADDED, payload: { products: newProducts } };
}

export const productDeleted = (productId) => {
  return { type: types.PRODUCT_DELETED, payload: { productId } };
}

export const productUpdated = (updatedProduct) => {
  return { type: types.PRODUCT_UPDATED, payload: { updatedProduct } }
}