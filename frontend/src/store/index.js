import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import authReducer from '../reducers/authReducer';
import streamsReducer from '../reducers/streamsReducer';

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer,
  }),
});

export default store;
