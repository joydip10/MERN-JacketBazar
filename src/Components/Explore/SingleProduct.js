import React from 'react';
import { Button,Card, Col } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
const SingleProduct = ({product}) => {
    const {name,img,price,desc}=product;
    const history=useHistory();
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} width="286" height="180" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="text-secondary">{price}</Card.Subtitle>
                    <Card.Text style={{textAlign:'justify'}}>
                        {desc.substring(0,120)}[...]
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="success" onClick={()=>history.push(`/placeOrder/${product._id}`)}>Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;