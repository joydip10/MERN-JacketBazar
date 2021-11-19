import React from 'react';
import { Button,Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SingleProduct = ({product,handleDelete}) => {
    const {name,img,price,desc,status}=product;
    const history=useHistory();
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="text-secondary">{price}</Card.Subtitle>
                    <Card.Text>
                        {desc.substring(0,120)}[...]
                        <br/>
                        <h6>Status: <span className={(status==="pending")?"text-danger":"text-success"}>{status}</span></h6>
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;