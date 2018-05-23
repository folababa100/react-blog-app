import React from 'react';

const Editor = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <form>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="title" />
              <textarea className="form-control" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editor;
