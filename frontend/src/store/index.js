import { createStore } from 'redux';

const blahReducer = (blah = null, action) => blah;

const store = createStore(blahReducer);

export default store;
