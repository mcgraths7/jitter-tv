import { AUTH_TRY_SIGN_IN, AUTH_TRY_SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: null,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_TRY_SIGN_IN:
      return { ...state, isLoggedIn: true, userId: payload };
    case AUTH_TRY_SIGN_OUT:
      return { ...state, isLoggedIn: false, userId: null };
    default:
      return state;
  }
};

export default authReducer;
