import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import clientId from '../secrets/clientId';
import { login, logout } from '../actions/authActions';

const GoogleAuth = ({ isLoggedIn, login, logout }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId,
          scope: 'email',
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  }, []);

  const onLoginButtonClicked = () => {
    auth.signIn().then(() => {
      login();
    });
  };

  const onLogoutButtonClicked = () => {
    auth.signOut().then(() => {
      logout();
    });
  };

  if (!auth) {
    return (
      <button className="ui google plus button loading button">
        Loading...
      </button>
    );
  }

  if (!isLoggedIn) {
    return (
      <button
        className="ui google plus button small"
        onClick={onLoginButtonClicked}
      >
        <i className="google icon"></i>
        Login with Google
      </button>
    );
  }
  return (
    <button
      className="ui google plus button small"
      onClick={onLogoutButtonClicked}
    >
      <i className="google icon"></i>
      Logout
    </button>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, { login, logout })(GoogleAuth);
