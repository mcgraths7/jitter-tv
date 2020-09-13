const authReducer = (isLoggedIn = null, action) => {
  const { type } = action;
  switch (type) {
    case 'auth/login':
      return true;
    case 'auth/logout':
      return false;
    default:
      return isLoggedIn;
  }
};

export default authReducer;
