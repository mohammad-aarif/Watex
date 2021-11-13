import { LinearProgress, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Register = () => {
    const history = useHistory()
    const location = useLocation()
    const {user, signUpWithEmail, isLoading, error, setError} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if(data.initpass === data.password){
            signUpWithEmail(data.email, data.password, data.displayName, history, location)
            reset()
            setError('')
        }
        else{
            setError("Password Not Matched!")
        }
    }
    console.log(user)
    return (
        <div>
            <div className="w-25 py-5 mx-auto">
                <h4 className="text-center">Register</h4>
                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className="w-100 py-2" id="standard-basic" label="Name" type="text" variant="standard" {...register("displayName")}  />
                    <TextField className="w-100 py-2" id="standard-basic" label="Email" type="email" variant="standard" {...register("email")} />
                    <TextField className="w-100 py-2" id="standard-basic" label="Password" type="password" variant="standard" {...register("initpass")}  />
                    <TextField className="w-100 py-2" id="standard-basic" label="Re-Enter Password" type="password" variant="standard" {...register("password")}  />
                    <button type="submit" className="btn w-100 general-btn">Register</button>
                </form>}
                {isLoading && <LinearProgress />}
                    <p className="text-danger text-bold text-center">{error}</p>
                    <p className="py-2">Don't Have an Account? <Link to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;