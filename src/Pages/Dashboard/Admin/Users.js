import React, { useEffect, useState } from 'react';
import '../dashboard.css'
import SingleUser from './SingleUser';
const User = () => {
    const[user, setUser] = useState([]);
    // Fetching Data 
    useEffect(() => {
        fetch(`http://localhost:3002/users`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);

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
                  const reamaining = user.filter(data => data._id !== id);
                  setUser(reamaining)
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
            <div className="col-md-2">
                <h5>Photo</h5>
            </div>
            <div className="col-md-3">
              <h5>User Name</h5>
            </div>
            <div className="col-md-3">
              <h5>User Email</h5>
            </div>
            <div className="col-md-2">
              <h5>Role</h5>
            </div>
            <div className="col-md-2">
              <h5>#</h5>
            </div>
          </div>
        </div>
        {
          user.map(item => <SingleUser key={item._id} handleDelete={handleDelete} item={item}></SingleUser>)
        }
      </div>
    );
};

export default User;