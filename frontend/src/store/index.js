import { createStore, combineReducers } from 'redux';

import authReducer from '../reducers/authReducer';

const store = createStore(
  combineReducers({
    isLoggedIn: authReducer,
  }),
);

export default store;
