import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import Review from '../../Dashboard/Review/Review';
import Product from '../../Explore/Product/Product';
import NavBar from '../../Shared/NavBar/NavBar';
import ContactUs from '../contactUs/ContactUs';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import './Home.css';

const Home=() => {
    //Title Change
 useEffect(() => {
        document.title="G.Chairs";
    }, []);
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const [reviews, setReviews]=useState([]);
    const [reviewloading, setReviewLoading]=useState(true);
    //getting products from db
    useEffect(() => {
        fetch('https://immense-escarpment-32991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);
    let popularProducts=[];
    popularProducts=products.slice(products.length-6);
    console.log(popularProducts);
//getting review from db
    useEffect(() => {
    fetch('https://immense-escarpment-32991.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setReviewLoading(false);
            });
}, [])

    return (
        <div>
            {/* First Part Navbar  */}
            <NavBar></NavBar>
            {/* Second Part Slider */}
            <Slider></Slider>
            {/* Third Part Products */}
            <div className="products-section">
                <h2 className='text-center top-products-title py-2'>OUR TOP RATED CHAIRS</h2>
                <div className='d-flex align-items-center justify-content-center'>
                {
                loading && <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning" />  </div>
                }</div>
                <div className="container row mx-auto align-items-center justify-content-center">
                {
                    popularProducts.map(pd => <Product
                        key={pd._id}
                        pd = {pd}
                    ></Product>)
                }
                </div>
                {/* Fourth Part Review part */}
                <div className="review-section">
                    <h2 className='text-center review-title py-3'>WHAT CLIENT'S SAY ABOUT <br /> G.CHAIRS</h2>
                    {
                reviewloading && <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning" />  </div>
                    }
            <div className="container row mx-auto gx-3 align-items-center justify-content-center">
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review = {review}
                    ></Reviews>)
                }
                </div>
                </div>
            </div>
            {/* Bonus (fifth) Contact Form */}
            <h2 className='text-center contact-head py-2'>TO KNOW ABOUT WHOLESALE PRICE <br /> CONTACT US</h2>
            <ContactUs></ContactUs>
            {/* Last (sixth) Footer Part */}
            <Footer></Footer>
        </div>
    );
};

export default Home;