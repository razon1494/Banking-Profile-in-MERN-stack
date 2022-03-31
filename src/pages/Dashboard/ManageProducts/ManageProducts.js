import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ManageProducts.css'
const ManageProducts=() => {


    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const [control, setConrol]=useState(false);
    //getting data from db
    useEffect(() => {
        fetch('https://immense-escarpment-32991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, [control]);
  const handleDelete=id => {
      let sure=false;
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if(result.isConfirmed) {
          // setSure(true);
          sure=true;
          console.log(sure);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        }
      }).then(() => {
        if(sure) {
          fetch(`https://immense-escarpment-32991.herokuapp.com/deleteproduct/${id}`, {
            method: "DELETE",
            headers: {"content-type": "application/json"},
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.deletedCount) {
                setConrol(!control);
              } else {
                setConrol(false);
              }
            });
        }
      })

    console.log(id);
    }
    let index=1;
    return (
        <div className='manage-product-container'>
        <h1 className='manage-product-h text-center mb-4'>PRODUCTS </h1>
        <p className='text-center fs-4 manage-product-p'>Be Careful! If you confirm delete, the product will gone for forever entirely. </p>
            {
                loading && <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning" />  </div>
                }
 <div className='table-responsive'>
<table class="table mt-4 table-hover table-light table-responsive-sm">
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Photo</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
                </thead>
                 <tbody>
            {
                        products.map(pd => <tr>
                            <th scope="row">{index++}</th>
                          <td> <span className='product-name '> {pd.Name}</span></td>
                          <td>
                            <img className='img-fluid' src={pd.img} alt="" width="100px"/></td>
                            <td className='produc-price'>${pd.price}</td>
                            <td>
                                <button
                onClick={()=> handleDelete(pd._id)}
                className="btn btn-danger"
              >Delete</button>
                            </td>

                </tr>)
                }</tbody>
                </table></div>
        </div>
    );
};

export default ManageProducts;