import React from 'react';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { LinearProgress } from '@mui/material';

const Login = () => {
    const location = useLocation();
    const history = useHistory()
    // history.push('/')
    const {googleSignIn, isLoading, isAdmin, signInWithEmail, error} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmail(data.email, data.password, location, history)
    }
    const handlegoogleSignIn = () => {
        googleSignIn(location, history)
    }
    return (
        <div>
            <div className="w-25 py-5 mx-auto">
                <h4 className="text-center">Login</h4>
                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className="w-100 py-2" {...register("email")} label="Email" type="email" variant="standard" />
                    <TextField className="w-100 py-2" {...register("password")} label="Password" type="password" variant="standard" />
                    <p>Forget Password?</p>
                    <button type="submit" className="btn w-100 general-btn">Login</button>
                </form>}
                {isLoading && <LinearProgress />}
                    <p className="py-2">Don't Have an Account? <Link to="/register">Register Now</Link> </p>
                    <p className="text-danger text-bold text-center">{error}</p>
                    <h5 className='text-center'>Login With</h5>
                    <button onClick={handlegoogleSignIn} className="btn btn-outline-primary w-100">Google</button>

            </div>
        </div>
    );
};

export default Login;