import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import OrderItem from './OrderItem';
import './dashboard.css'
const ManageOrder = () => {
    const[sale, setSale] = useState([]);
    const{user}= useAuth()

    // Fetching Data 
    useEffect(() => {
        fetch(`http://localhost:3002/sale?email=${user.email}`)
        .then(res => res.json())
        .then(data => setSale(data))
    }, [user.email]);

    // Delete Function 

        const handleDelete = (id) => {
          if(window.confirm("Are You Sure?")){
            const url = `http://localhost:3002/sales/${id}`
          fetch(url, {
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if(data.deletedCount){
                  const reamaining = sale.filter(data => data._id !== id);
                  setSale(reamaining)
                  alert('Delete Succesfull')
              }
          })
        }
      }

    return (
      <div className="container py-5">
        {/* <DashboardNav /> */}
        <h3 className="text-center">Manage Your Order</h3>
        <hr className="divider mb-5" />
        <div className="order-list mb-2">
          <div className="row align-items-center">
            <div className="col-md-1">
                <h5>Photo</h5>
            </div>
            <div className="col-md-2">
              <h5>Customer Name</h5>
            </div>
            <div className="col-md-3">
              <h5>Product ID</h5>
            </div>
            <div className="col-md-2">
              <h5>Order Date</h5>
            </div>
            <div className="col-md-2">
              <h5>Status</h5>
            </div>
            <div className="col-md-2">
              <h5>#</h5>
            </div>
          </div>
        </div>
        {
          sale.map(item => <OrderItem key={item._id} handleDelete={handleDelete} item={item}></OrderItem>)
        }
      </div>
    );
};

export default ManageOrder;