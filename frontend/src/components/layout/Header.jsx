import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleAuth from '../GoogleAuth';

const renderCreate = (isLoggedIn) => {
  if (isLoggedIn) {
    return (
      <Link className="item" to="/streams/new">
        Create Stream
      </Link>
    );
  }
  return null;
};

const renderDashboard = (isLoggedIn) => {
  if (isLoggedIn) {
    return (
      <Link className="item" to="/dashboard">
        Dashboard
      </Link>
    );
  }
  return null;
};

const Header = ({ isLoggedIn }) => (
  <div className="ui secondary pointing menu">
    <Link className="item" to="/">
      JitterTV
    </Link>
    <div className="right menu">
      <Link className="item" to="/">
        Streams
      </Link>
      {renderCreate(isLoggedIn)}
      {renderDashboard(isLoggedIn)}
      <GoogleAuth />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Header);
