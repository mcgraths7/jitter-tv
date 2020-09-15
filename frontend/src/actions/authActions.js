import { AUTH_TRY_SIGN_IN, AUTH_TRY_SIGN_OUT } from './types';

export const trySignIn = (userId) => ({
  type: AUTH_TRY_SIGN_IN,
  payload: userId,
});

export const trySignOut = () => ({ type: AUTH_TRY_SIGN_OUT });
