import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const BookNow = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const date = new Date().toLocaleDateString()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const finalData = {
            ...data,
            userPhoto: user.photoURL,
            productId: id,
            email: user.email,
            status: "Pending",
            date: date
        }

        // Sending to Server 
        fetch("https://nameless-taiga-42351.herokuapp.com/sale",{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(finalData)
        })
        .then(res => res.json())
        .then(sale => {
            if(sale.insertedId){
                alert("Your Product is On the Way!")
            }
            else{
                alert("Something Went Wrong!")
            }
        })
        reset()
    }
    return (
        <div>
            <div className="w-25 py-5 mx-auto">
                <h4 className="text-center">Book Now</h4>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className="w-100 py-2" required defaultValue={user.displayName} label="Name" type="text" variant="standard" {...register("name")}  />
                    <TextField className="w-100 py-2" required defaultValue={user.email} label="Email" type="email" variant="standard" {...register("shippingEmail")} />
                    <TextField className="w-100 py-2" required disabled defaultValue={id} label="Product" variant="standard" {...register("productId")}  />
                    <TextField className="w-100 py-2" required multiline rows={4} label="Shipping Address" variant="standard" {...register("address")} required />
                    <button type="submit" className="btn w-100 general-btn">Proceed Order</button>
                </form>
                {/* {isLoading && <LinearProgress />} */}
                    {/* <p className="text-danger text-bold text-center">{error}</p> */}
            </div>
        </div>
    );
};

export default BookNow;