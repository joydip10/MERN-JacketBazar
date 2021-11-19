import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading,setLoading]=useState(true);
    const [check,setCheck]=useState(false);
    const {user,token}=useAuth();
    const history=useHistory();
    useEffect(() => {
        fetch(`https://secret-everglades-19035.herokuapp.com/orders`,{
            headers:{
                'authorization':`Bearer ${token}`
            }
        })
            .then(res => {
                if(res.status===200){
                    return res.json();
                }
                else if(res.status===401){
                    history.push('/login');
                }
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, [check])

    const handleDelete=(id)=>{
        fetch(`https://secret-everglades-19035.herokuapp.com/orders/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                alert('Deleted one order!');
                const remainingOrders=products.filter(product=>product._id!==id);
                setProducts(remainingOrders);
            }
        })
    }
    const handleStatus=(id)=>{
        const orderid={id}
        fetch(`https://secret-everglades-19035.herokuapp.com/orders`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json' 
            },
            body:JSON.stringify(orderid)
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
            }
        })
    }
    return (
        <div className="container px-5 py-3">
        <h3 className="text-center">Manage <span className="text-warning">Orders</span></h3>
        {
            (isLoading===true) &&  
            <div className="text-center">
                <CircularProgress/>
            </div>
        }
        <Row xs={1} md={3} className="g-4">
            {
                products.slice(0,6).map(product=><SingleProduct key={product._id} product={product} handleDelete={()=>handleDelete(product._id)} handleStatus={()=>handleStatus(product._id)}></SingleProduct>)
            }
        </Row>
        </div>
    );
};

export default Products;