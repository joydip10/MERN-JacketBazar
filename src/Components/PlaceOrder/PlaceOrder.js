import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from './../Shared/Header/Header';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const [cloth, setCloth] = useState({});
    const [isLoading, setLoading] = useState(true);
    const { register, handleSubmit,reset } = useForm();
    const {user}=useAuth();

    const onSubmit = data => {
        const order={user:data.name, email:data.email, phone:data.phone, name: cloth.name, img: cloth.img, price: cloth.price, desc:cloth.desc};
        fetch('https://secret-everglades-19035.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Order Placed');
                reset();
            }
        })
    };
    
    useEffect(() => {
        fetch(`https://secret-everglades-19035.herokuapp.com/clothes/${id}`)
            .then(res => res.json())
            .then(data => {
                setCloth(data);
                setLoading(false);
            })
    }, [])
    return (
        <div>
            <Header />
            <h3 className="text-center my-3">Place your<span className="text-warning"> Order: {cloth.name}</span></h3>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center my-5">
                
                <div className="d-flex flex-column align-items-center w-50">
                    <img src={cloth.img} alt="" className="img-fluid rounded-circle img-thumbnail" />
                    <h5 className="text-warning">{cloth.name}</h5>
                    <h6 className="text-danger">{cloth.price}</h6>
                    <p className="w-50" style={{textAlign:'justify'}}>{cloth.desc}</p>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Enter<span className="text-success"> Information</span></h3>
                        <input placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true})} />
                        <br/>
                        <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true})} />
                        <br/>
                        <input placeholder="Adress" {...register("adress", { required: true})} />
                        <br/>
                        <input placeholder="Phone" {...register("phone", { required: true})} />
                        <br/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PlaceOrder;