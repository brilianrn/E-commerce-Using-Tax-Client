import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  itemReducer,
  userReducer,
  cartReducer
});

export default reducer;