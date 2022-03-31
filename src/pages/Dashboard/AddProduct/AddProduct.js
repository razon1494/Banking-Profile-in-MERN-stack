import React, {useEffect} from 'react';
import './AddProduct.css';
import {useForm} from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
const AddProduct=() => {
    const {register, handleSubmit, reset}=useForm();
    //calling api for add products

    const onSubmit=data => {
        console.log(data);
        axios.post(`https://immense-escarpment-32991.herokuapp.com/addservice `, data)
            .then(res => {
                if(res.data.insertedId) {
                    //confirmation
                    Swal.fire(
  'ADDED!',
  'Your Product Is Now Live!',
  'success'
)
                    //reset the form
                    reset()
                }
            })

  }
    return (
        <div>
            <h2 className='add-product-title text-center'>ADD A NEW PRODUCT</h2>
            <p className='text-center text-danger'>**All Fields Are Mandatory**</p>
{/* Add Form Starts here */}
            <div className="form-container container">
                <form className='form row align-items-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <h4 className='d-inline col-md-3'>Chair Name: </h4>
<div className='col-md-8'>
                <input className='py-3 my-3 form-control' {...register("Name", {required: true})} placeholder='Chair' /></div>
                <br /><br />
                    <h4 className='d-inline col-md-3'>Subtitle  :   </h4>
                    <div className='col-md-8'>
                <input className='form-control py-3 my-3' {...register("subtitle", {required: true})} placeholder='subtitle' /></div>
                <br /><br />
                    <h4 className='d-inline col-md-3'>Specifications :   </h4>
                    <div className="col-md-8">
                <input className='form-control py-3 my-3' {...register("spec", {required: true})} placeholder='Specifications' /></div>
                <br /><br />

                    <h4 className='d-inline col-md-3'>Price :   </h4>
                    <div className="col-md-8">
                <input className='form-control py-3 my-3' type="number" {...register("price", {required: true})} placeholder='Price' /></div>
                <br /><br />

                    <h4 className='d-inline col-md-3'>Photo URL :   </h4>
                    <div className="col-md-8">
                <input className='form-control py-3 my-3' {...register("img", {required: true})} placeholder='Photo URL' />
                <br /><br /></div>
                    <h4 className='d-inline col-md-3'>Summary :   </h4>
                    <div className="col-md-8">
                <input className='form-control py-3 my-3' {...register("summary", {required: true})} placeholder='Short Description About product' /></div>
                <br /><br />
                 <h3 className='my-4 text-center' >Broad Description About Product</h3>
                <textarea  className="form-control m-3 p-4 w-75"{...register("details", {required: true})} placeholder='Details' />
                <br /><br />
      <input className='w-25 button-84 submit-part py-2 my-3 fs-3' type="submit" />
    </form>
            </div>

        </div>
    );
};

export default AddProduct;