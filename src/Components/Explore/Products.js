import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import { CircularProgress } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading,setLoading]=useState(true);
    useEffect(() => {
        fetch('https://secret-everglades-19035.herokuapp.com/clothes')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="container px-5 py-3">
        <h3 className="text-center">Explore some <span className="text-warning">Products</span></h3>
        {
            (isLoading===true) &&  
            <div className="text-center">
                <CircularProgress/>
            </div>
        }
        <Row xs={1} md={4} className="g-4">
            {
                products.map(product=><SingleProduct key={product._id} product={product}></SingleProduct>)
            }
        </Row>
        </div>
    );
};

export default Products;