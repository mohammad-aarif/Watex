import { Email } from '@material-ui/icons';
import React from 'react';

const RecieveOrder = (props) => {
    const {name, address, email, shippingEmail, userPhoto, productId, status, _id} = props.info
    const handleDelete = props.handleDelete;
    const handleShip = props.handleShip;
    return (
        <div className="order-list  my-3">
        <div className="d-flex align-items-center">
            <div className="order-profile-img px-3">
            <img src={userPhoto} alt="" />
            </div>
            <div className="buyer-info">
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
            <hr className="divider" />
            <p><b>{shippingEmail}</b></p>
            <p><b>Product ID:</b> {productId} </p>
            <p><b>Shipping Address:</b> {address} </p>
            <div className="d-flex py-2 justify-content-between">
                <button onClick={()=> handleShip(_id)} className="btn btn-success">Ship Order</button>
                <h6 className="text-warning btn py-2">{status}</h6>
                <button onClick={()=> handleDelete(_id)} className="btn btn-danger">Delete Order</button>
            </div>
            
    </div>
    );
};

export default RecieveOrder;