import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../context/useAuth';
import Footer from '../Home/Footer/Footer';
import NotFound from '../NotFound/NotFound';
import NavBar from '../Shared/NavBar/NavBar';
import './Purchase.css'
const Purchase=() => {
    //Title Change
 useEffect(() => {
        document.title="Book Chair";
    }, []);
    //destructuring user
    const {user}=useAuth();
    //getting params from url
    const {id}=useParams();
    const history=useHistory();
    //required state declaration
    const [product, setProduct]=useState({})
    const [phoneNumber, setPhoneNumber]=useState('');
    const [address, setAddress]=useState('');
    //new product order
    const addedProduct={};
    //getting Specific Data
    useEffect(() => {
        fetch(`https://immense-escarpment-32991.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            }).catch(error => {
                    alert('product not found', error);
            })

    }, []);
    const handlePlaceOrder=() => {
        addedProduct.email=user?.email;
        addedProduct.displayName=user?.displayName;
        addedProduct.status=false;
        addedProduct.phonenumber=phoneNumber;
        addedProduct.address=address;
        addedProduct.Name=product.Name;
        addedProduct.price=product.price;
        addedProduct.img=product.img;

        fetch("https://immense-escarpment-32991.herokuapp.com/placeorder", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(addedProduct),
        }).then((res) => res.json())
            .then((result) => console.log(result))
            .finally(
                Swal.fire({
  title: `${product.Name} Booked`,
  text: 'Please Complete Payment From Dashboard',
  imageUrl: `${product.img}`,
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: 'Custom image',
})

            );
//after booking if redirection needed just uncomment the below line
        // history.push('/dashboard');
}
//getting phone number
     const handlePhone=e => {
        console.log(e.target.value);
        const phone=e.target.value;
        setPhoneNumber(phone);
}

    const handleAddress=e => {
        console.log(e.target.value);
        const adrs=e.target.value;
        setAddress(adrs);
    }

    return (
        <div className='placeorder-container'>
            <NavBar></NavBar>
            <h1 className='book-title text-center'>Details About {product?.Name} </h1>
        <div className='row mt-5 mx-auto container align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-center'>
            <img className='img-fluid' src={product?.img} alt="" /></div>
            <div className='details text col-12'>
            <h1 className='details-title text-center'>{product?.Name}</h1>
            <h3 className='price fs-3'>Price: ${product?.price}</h3>
                    <h5 className="text-start mt-3 spots">{product?.spec}</h5>
                    <h5 className='details-p'> <span className='span'>Benifits:  {product?.details}</span>  </h5>
            <p className='text-start'>Your Email: {user.email}</p>
            <p className='text-start'>Your Name: {user.displayName}</p>
            <p className='text-start'>Hello, <span className='place-details'>{user.displayName} (<span className='place-details'> {user.email} </span>) </span>Please Put Your address & Phone number below. </p>
            <h5 className='address'>Your Address</h5>
                    <textarea onChange={handleAddress} className="form-control container my-3" placeholder='Address' />
                    <h5 className='address my-4  '>Please Give Your Phone Number </h5>
                    <input className='mb-4 form-control container' placeholder='Phone Number' type="number" onChange={handlePhone} />
                    <br />
                    <div className='d-flex align-items-center justify-content-center'>
            {
               (phoneNumber === '') ? <button onClick={handlePlaceOrder} className="px-3 py-2 btn btn-danger disabled">Place Your Order</button> : <button onClick={handlePlaceOrder} className="button-82-pushable disabled"><span class="button-82-shadow"></span>
  <span class="button-82-edge"></span><span class="button-82-front text">Place Your Order</span></button>
            }</div>

            </div>

            </div>
            <br /> <br />
        <Footer></Footer>
        </div>
    );
};

export default Purchase;