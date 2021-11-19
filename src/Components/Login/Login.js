import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../Hooks/useAuth';
import {Button} from "react-bootstrap";
const Login = () => {
    const {user, isLoading,authError,registerUser,loginUser,signInWithGoogle}=useAuth();
    const { register, handleSubmit } = useForm();
    const location=useLocation();
    const history=useHistory();
    const onSubmit = data => {
        console.log(data);
        loginUser(data.email,data.password,location,history);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <h3>Please<span style={{ color:'Green' }}> Login</span></h3>
            <input placeholder="Input Email" {...register("email", { required: true })} />
            <br />
            <input placeholder="Input Password" {...register("password", { required: true })} />
            <br />
            <input type="submit" />
            <h6 className="text-danger">{authError}</h6>
            <br/>
            <h4>Sign with Google</h4>
            <br/>
            <Button variant="warning" onClick={()=>signInWithGoogle(location,history)}>Google Signin</Button>
        </form>
    );
};

export default Login;