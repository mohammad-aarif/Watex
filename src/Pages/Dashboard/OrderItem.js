import React from 'react';

const OrderItem = (props) => {
    const{name, productId, date, userPhoto, _id, status} = props.item
    const handleDelete = props.handleDelete
    return (
        <div className="order-list mb-2">
        <div className="row align-items-center">
          <div className="col-md-1 order-profile-img">
            <img src={userPhoto} alt="" />
          </div>
          <div className="col-md-2">
            <h6>{name}</h6>
          </div>
          <div className="col-md-3 overflow-hidden">
            <h6>{productId}</h6>
          </div>
          <div className="col-md-2">
            <h6>{date}</h6>
          </div>
          {status === 'Pending' &&<> <div className="col-md-2 text-warning">
            <h6>{status}</h6>
          </div>
          <div className="col-md-2">
            <button onClick={()=> handleDelete(_id)} className="btn-danger btn">Delete</button>
          </div></>
          }
          {status === 'Shipped' && <><div className="col-md-2 text-success">
            <h6>{status}</h6>
          </div>
          <div className="col-md-2">
            <button disabled onClick={()=> handleDelete(_id)} className="btn-danger btn">Delete</button>
          </div></>
          }
        </div>
      </div>
    );
};

export default OrderItem;