import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../Hooks/useAuth';
import {useHistory} from "react-router-dom";
const Registration = () => {
    const {user, isLoading,authError,registerUser,loginUser,signInWithGoogle}=useAuth();
    const { register, handleSubmit } = useForm();
    const history=useHistory();
    const onSubmit = data => {
        registerUser(data.email,data.password,data.name,history);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <h3>Please<span style={{ color: 'Red' }}> Register</span></h3>
            <input placeholder="Input Name" {...register("name", { required: true })} />
            <br />
            <input placeholder="Input Email" {...register("email", { required: true })} />
            <br />
            <input placeholder="Input Password" {...register("password", { required: true })} />
            <br />
            <input placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />
            <br />
            <input type="submit" />
            <h6 className="text-danger">{authError}</h6>
        </form>
    );
};

export default Registration;