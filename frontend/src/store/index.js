import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import authReducer from '../reducers/authReducer';

const store = configureStore({
  reducer: combineReducers({ auth: authReducer, form: formReducer }),
});

export default store;
