import { TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const email = {
            email : data.email
        }
        console.log(email)
        // Sending Data to the server 
        fetch('http://localhost:3002/users/admin', {
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(email)
        })
        reset()
    }
    return (
        <div>
            <h2 className="text-center">Add A New Product</h2>
            <hr className="divider" />
            <div className="w-75 py-5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className="w-100 py-2" label="Candidate Email" type="email" variant="standard" {...register("email")} required  />
                    <button type="submit" className="btn w-100 general-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;