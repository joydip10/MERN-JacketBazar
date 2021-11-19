import React, { useEffect, useState } from 'react';
import { Button,Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Banner = () => {
    const [data,setData]=useState([]);
    const [isLoading,setLoading]=useState(true);
    const history=useHistory();
    useEffect(()=>{
        fetch('https://secret-everglades-19035.herokuapp.com/clothes')
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            setLoading(false);
        })
    },[])
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/W24NkxT/Slider1.jpg"
                    height="400"
                    alt="First slide"
                />
                <Carousel.Caption>
               {
                   (isLoading===false) &&  <Button onClick={()=>history.push(`/placeOrder/${data[0]._id}`)}>Buy Now</Button>
               }
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/4g29Rcc/Slider2.jpg"
                    height="400"
                    alt="Second slide"
                />

                <Carousel.Caption>
                {
                   (isLoading===false) &&  <Button onClick={()=>history.push(`/placeOrder/${data[1]._id}`)}>Buy Now</Button>
               }
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/nwPZnjH/Slider3.jpg"
                    height="400"
                    alt="Third slide"
                />

                <Carousel.Caption>
                {
                   (isLoading===false) &&  <Button onClick={()=>history.push(`/placeOrder/${data[2]._id}`)}>Buy Now</Button>
               }
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;