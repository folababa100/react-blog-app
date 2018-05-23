import React from 'react';
import Header from './Header';

const DashboardPage = () => (
  <div>
    <Header />
    <div className="container">
      <div className="form-group">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-5 col-sm-4 col-4">
            <input type="text" placeholder="Search" className="form-control" />
          </div>
          <div className="col-lg-2 col-md-3 col-4 col-sm-4">
            <select className="form-control">
              <option>By Title</option>
              <option>By Date</option>
            </select>
          </div>
          <div className="col-lg-2 col-md-4 col-4 col-sm-4 ml-auto">
            <button className="btn btn-block btn-primary">Add Post</button>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default DashboardPage;
