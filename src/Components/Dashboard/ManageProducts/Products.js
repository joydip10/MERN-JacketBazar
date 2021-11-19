import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
const Products = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [products, setProducts] = useState([]);
    const [check, setCheck] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://secret-everglades-19035.herokuapp.com/clothes')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, [check])

    const handleDelete = (id) => {
        fetch(`https://secret-everglades-19035.herokuapp.com/clothes/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Successfully deleted a product!');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
    }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://secret-everglades-19035.herokuapp.com/clothes',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('A new Product has been added!');
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
        <div className="container px-5 py-3">
            <h3 className="text-center">Our  <span className="text-warning">Products</span></h3>
            <Button onClick={handleOpen}>Add new Product</Button>
            {
                (isLoading === true) ?
                    <div className="text-center">
                        <CircularProgress />
                    </div>
                    :
                    <Row xs={1} md={4} className="g-4">
                        {
                            products.map(product => <SingleProduct key={product._id} product={product} check={check} setCheck={setCheck} handleDelete={() => handleDelete(product._id)}></SingleProduct>)
                        }
                    </Row>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="py-3">Add new <span className="text-warning"> Product</span></h3>
                            <input placeholder="Name"  {...register("name", { required: true })} />
                            <br />
                            <input placeholder="Price"  {...register("price", { required: true })} />
                            <br />
                            <textarea placeholder="Description" {...register("desc", { required: true })} style={{ width: '57%' }} />
                            <br />
                            <input placeholder="Image Link"  {...register("img", { required: true })} />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Products;