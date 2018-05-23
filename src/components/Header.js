import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <nav className="navbar navbar-dark bg-primary">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Blog</span>

      <button className="btn btn-outline-light my-2 my-sm-0" onClick={startLogout}>Logout</button>
    </div>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
