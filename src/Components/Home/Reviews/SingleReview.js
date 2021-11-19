import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';

const SingleReview = (props) => {
    const { name, position, rating, desc, img } = props.review;
    let avatar;
    if (img === "") {
        avatar = <Avatar>N</Avatar>
    }
    else {
        avatar = <Avatar alt="Remy Sharp" src={img} sx={{ width: 56, height: 56 }}/>
    }
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {avatar}
            <p className="text-center">
                <h6 className="py-0 my-0 text-success">{name}</h6>
                <h6 className="py-0 my-0 text-success">{position}</h6>
                <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly />
                <br/>
                {desc}
            </p>
        </Grid>
    );
};

export default SingleReview;