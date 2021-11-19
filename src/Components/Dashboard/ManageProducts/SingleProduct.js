import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const SingleProduct = ({ product,check,setCheck,handleDelete }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { _id,name, img, price, desc } = product;
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const cloth={id:_id,data:data};
        fetch('https://secret-everglades-19035.herokuapp.com/clothes',{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(cloth)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                if(check===false){
                    setCheck(true);
                }
                else{
                    setCheck(false);
                }
                reset();
                handleClose();
            }
        })
    };
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="text-secondary">{price}</Card.Subtitle>
                    <Card.Text>
                        {desc.substring(0, 120)}[...]
                    </Card.Text>
                    <div className="text-center">
                        <Button onClick={handleOpen}>Update Information</Button>
                        <Button onClick={handleDelete}>Delete product</Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="py-3">Update <span className="text-warning"> Information</span></h3>
                            <input placeholder="Name" defaultValue={name} {...register("name", { required: true })} />
                            <br />
                            <input placeholder="Price" defaultValue={price} {...register("price", { required: true })} />
                            <br />
                            <textarea placeholder="Description" defaultValue={desc} {...register("desc", { required: true })} style={{width:'57%'}} />
                            <br />
                            <input placeholder="Image Link" defaultValue={img} {...register("img", { required: true })} />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </Box>
            </Modal>
        </Col>
    );
};

export default SingleProduct;