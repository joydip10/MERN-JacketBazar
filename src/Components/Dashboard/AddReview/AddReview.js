import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const [stars, setstars] = useState(0);
    const { register, handleSubmit, reset } = useForm();
    const {user}=useAuth();
    const onSubmit = data => {
        const review = { name: data.name, position: data.position, desc: data.desc, img: data.img, rating: stars }
        fetch('https://secret-everglades-19035.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review successfully posted!')
                    reset();
                }
            })
    };
    return (
        <div className="text-center">
            <h3>Review <span className="text-warning">US</span></h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true })} />
                <br />
                <input placeholder="Position" {...register("position", { required: true })} />
                <br />
                <input placeholder="desc" {...register("desc", { required: true })} />
                <br />
                <input placeholder="image link" {...register("img", { required: true })} />
                <br />
                <Rating
                    name="simple-controlled"
                    value={stars}
                    onChange={(event, newValue) => {
                        setstars(newValue);
                    }}
                />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;