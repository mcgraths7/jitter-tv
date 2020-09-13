import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        JitterTV
      </Link>
      <div className="right menu">
        <Link className="item" to="/">
          Streams
        </Link>
        <Link className="item" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
