import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body text-center">
              <h1>Boilerplate</h1>
              <p>Tag line for app.</p>
              <button className="btn btn-primary" onClick={startLogin}>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
