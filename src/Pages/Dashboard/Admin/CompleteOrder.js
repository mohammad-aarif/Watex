import React from 'react';

const CompleteOrder = (props) => {
    const {userPhoto, name, productId, status} = props.info
    return (
        <div className="order-list mb-2">
        <div className="row align-items-center">
            <div className="col-md-2 order-profile-img">
                <img src={userPhoto} alt="" />
            </div>
            <div className="col-md-3">
                <h6>{name}</h6>
            </div>
            <div className="col-md-5">
                <h6>{productId}</h6>
            </div>
            <div className="col-md-2">
                <h6 className='text-success'>{status}</h6>
            </div>  
        </div>
     </div>
    );
};

export default CompleteOrder;