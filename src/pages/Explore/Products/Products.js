import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Product from '../Product/Product';
import './Products.css'
const Products=() => {
    //Title Change
 useEffect(() => {
        document.title="Explore Chairs";
    }, []);
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    //getting data from db
    useEffect(() => {
        fetch('https://immense-escarpment-32991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false)
            })
    }, [])
    console.log(products);
    return (
        <div>
            <NavBar ></NavBar>
<br />
            <div className="products mt-5">
                <h1 className="products-title mt-5 text-center">EXPLORE ALL OF OUR CHAIR COLLECTIONS</h1>
                <div className='d-flex align-items-center justify-content-center mt-5'>{
                loading && <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning" />  </div>
                }</div>
                <div className="container row mx-auto gx-3 align-items-center justify-content-center">
                    {
                        products.map(pd => <Product
                            key={pd._id}
                            pd={pd}
                        ></Product>)
                    }
                </div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Products;