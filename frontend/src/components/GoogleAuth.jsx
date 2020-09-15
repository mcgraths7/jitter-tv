import React from 'react';
import { connect } from 'react-redux';

import clientId from '../secrets/clientId';
import { trySignIn, trySignOut } from '../actions/authActions';

class GoogleAuthClass extends React.Component {
  constructor(props) {
    super(props);
    this.onAuthChange = this.onAuthChange.bind(this);
    this.onSignInButtonClicked = this.onSignInButtonClicked.bind(this);
    this.onSignOutButtonClicked = this.onSignOutButtonClicked.bind(this);
  }

  componentDidMount() {
    window.gapi.load('client: auth2', () => {
      window.gapi.client
        .init({
          clientId,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange(isSignedIn) {
    const { auth, props } = this;
    if (isSignedIn) {
      props.trySignIn(auth.currentUser.get().getId());
    } else {
      props.trySignOut();
    }
  }

  onSignInButtonClicked() {
    this.auth.signIn();
  }

  onSignOutButtonClicked() {
    this.auth.signOut();
  }

  render() {
    const { auth, props } = this;
    if (!auth) {
      return (
        <button type="button" className="ui google plus button loading button">
          Loading...
        </button>
      );
    }

    if (!props.isLoggedIn) {
      return (
        <button
          type="button"
          className="ui google plus button small"
          onClick={this.onSignInButtonClicked}
        >
          <i className="google icon" />
          Login with Google
        </button>
      );
    }
    return (
      <button
        type="button"
        className="ui google plus button small"
        onClick={this.onSignOutButtonClicked}
      >
        <i className="google icon" />
        Logout
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, {
  trySignIn,
  trySignOut,
})(GoogleAuthClass);
