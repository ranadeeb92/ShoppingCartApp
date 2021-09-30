import { combineReducers } from 'redux';
import products from '../reducers/products';
import cartItems from '../reducers/cartItems';

const rootReducer = combineReducers({
  products,
  cartItems,
});

export default rootReducer;