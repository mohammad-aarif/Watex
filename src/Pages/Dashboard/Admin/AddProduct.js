import { TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const productData = {
            ...data,
            rating:0,
            ratecount:0
        }
        console.log(productData)
        // Sending Data to the server 
        fetch('http://localhost:3002/products', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        reset()
    }
    return (
        <div>
            <h2 className="text-center">Add A New Product</h2>
            <hr className="divider" />
            <div className="w-75 py-5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className="w-100 py-2" label="Name" type="text" variant="standard" {...register("name")} required  />
                    <TextField className="w-100 py-2" label="Image Link" type="text" variant="standard" {...register("img")} required />
                    <TextField className="w-100 py-2" label="Price" type="number" variant="standard" {...register("price")} required  />
                    <TextField className="w-100 py-2" label="Brief About Product"  variant="standard" multiline rows={4} {...register("description")} required  />
                    <button type="submit" className="btn w-100 general-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;