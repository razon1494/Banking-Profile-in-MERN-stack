import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../context/useAuth';
import './MyOrder.css'

const MyOrders=() => {
  //Title Change
 useEffect(() => {
        document.title="My Orders";
    }, []);
    //getting all orders of user email
    const {user}=useAuth();
    const [bookings, setBookings]=useState();
    const [control, setConrol]=useState(false);
    useEffect(() => {
    fetch(`https://immense-escarpment-32991.herokuapp.com/myorder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
    }, [control]);

    const handleDelete=(id) => {
      // var sure=window.confirm(`Are you sure you want to delete the item`);
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
      }).then(()=>{ if (sure) {
            fetch(`https://immense-escarpment-32991.herokuapp.com/deleteorder/${id}`, {
                method: "DELETE",
      headers: { "content-type": "application/json" },
            }).then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
        }})


    console.log(id);
    }

    let index=1;
    let sum=0;
    return (
        <div>
        <h2 className='manage-product-h text-center'>My Orders Are here</h2>
        {/* Responsive Table for showing orders */}
        <div className='table-responsive'>
        <table className="table table-hover">
          <thead>
    <tr>
      <th className='fs-5' scope="col">#</th>
      <th className='fs-5' scope="col">Chair</th>
      <th className='fs-5' scope="col">Photo</th>
      <th className='fs-5' scope="col">Price</th>
      <th className='fs-5' scope="col">Delete</th>
      <th className='fs-5' scope="col">Status</th>
    </tr>
  </thead>
            {
            bookings?.map(item => <tbody key={item._id}>
                <tr>

                <th className='fs-5' scope="row">{index++}</th>
                <td className='fs-5'>{item.Name}</td>
                <td className='fs-5'><img className='img-fluid' src={item.img} alt="" width="100px"/></td>
                <td className='fs-5 fw-bold'>${item.price}</td>
                <td className='fs-5'><button
                onClick={()=> handleDelete(item._id)}
                className="crs-btn btn p-2 fs-4"
              >
                <i class="fas fa-times cross"></i>
              </button></td>
                    <td className='fs-5'>
                        <p className='d-none'>{sum = sum+ parseInt(item.price) }</p>
                        {item.status ? <p>Shipped</p> : <p>Pending</p> }
                </td>
              </tr>
                </tbody> )
                    }
            <th className='fs-3'>#</th>
            <th>--</th>
                    <th className='fs-3 text-danger'>Total</th>
                    <th className='fs-3 text-danger'>${sum}</th>
                    <th>--</th>
                    <th>--</th>

        </table></div>

        </div>
    );
};

export default MyOrders;