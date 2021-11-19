import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SingleReview from './SingleReview';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { CircularProgress } from '@mui/material';

  
const Reviews = () => {
  const [reviews,setReviews]=useState([]);
  const [isLoading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://secret-everglades-19035.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data=>{
      setReviews(data);
      setLoading(false);
    })
  },[])

    return (
      <Container className="px-5 my-5">
        <h3 className="text-center">Customer<span className="text-warning"> Reviews</span></h3>
        {
            (isLoading===true) &&  
            <div className="text-center">
                <CircularProgress/>
            </div>
        }
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {
            reviews.map(review=><SingleReview key={review._id} review={review}></SingleReview>)
          }          
        </Grid>
      </Box>
      </Container>
    );
};

export default Reviews;