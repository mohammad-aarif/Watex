import React from 'react';
import useSale from '../../../Hooks/useSale';
import './admin.css'
import CompleteOrder from './CompleteOrder';
import RecieveOrder from './RecieveOrder';
const AdminDashboard = () => {
    const [sale, setSale] = useSale();
    const pending = sale.filter(item => item.status === 'Pending')
    const shipped = sale.filter(item => item.status === 'Shipped')


        // Delete Function 
        const handleDelete = (id) => {
            if(window.confirm("Are You Sure?")){
              const url = `https://nameless-taiga-42351.herokuapp.com/sales/${id}`
            fetch(url, {
              method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    const reamaining = sale.filter(data => data._id !== id);
                    setSale(reamaining)
                    alert('Delete Succesfull')
                }
            })
          }
        }

        const handleShip = (id) => {
            const data = {
                saleId: id
            }
            if(window.confirm("Are You Sure?")){
                const url = `https://nameless-taiga-42351.herokuapp.com/sales/${id}`
              fetch(url, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
              })
              .then(res => res.json())
              .then(data => {
                  if(data.modifiedCount){
                      const reamaining = sale.filter(data => data._id !== id);
                      setSale(reamaining)
                      alert('Shipping On the Way')
                  }
              })
            }
          }
    return (
        <div className="recieve-order container">
            <h2 className="text-center">Total Order</h2>
            <hr className="divider" />
            <div className="row py-5 g-5">
                <div className="col-md-6">
                <h4 className="text-center">Order Recived</h4>
                    {
                        pending.map(item => <RecieveOrder key={item._id} handleShip ={handleShip} handleDelete={handleDelete} info={item}></RecieveOrder>)
                    }
                </div>
                <div className="col-md-6 p">
                <h4 className="text-center pb-2">Order Completed</h4>
                <div className="order-list mb-2">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <h5>Photo</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>Customer</h5>
                        </div>
                        <div className="col-md-5">
                            <h5>Product ID</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Status</h5>
                        </div>  
                    </div>
                 </div>
                 {
                     shipped.map(item => <CompleteOrder key={item._id} info={item}></CompleteOrder>)
                 }
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;