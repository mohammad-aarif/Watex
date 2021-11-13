import React from 'react';

const SingleUser = (props) => {
    const{name, email, photoURL, role, _id} = props.item
    const handleDelete = props.handleDelete
    return (
        <div className="order-list mb-2">
        <div className="row align-items-center">
          <div className="col-md-2 order-profile-img">
            <img src={photoURL} alt="" />
          </div>
          <div className="col-md-3">
            <h6>{name}</h6>
          </div>
          <div className="col-md-3 overflow-hidden">
            <h6>{email}</h6>
          </div>
          <div className="col-md-2 text-danger">
            <h6>{role}</h6>
          </div>
          <div className="col-md-2">
            <button onClick={()=> handleDelete(_id)} className="btn-danger btn">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default SingleUser;