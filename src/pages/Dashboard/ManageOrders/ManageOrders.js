import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import './ManageOrders.css'
const ManageOrders=() => {
    //state declare
    const [orders, setOrders]=useState([]);
    const [check, setCheck]=useState(true);
    const [control, setConrol]=useState(false);
    //getting orders data
    useEffect(() => {
        fetch('https://immense-escarpment-32991.herokuapp.com/managebookings')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [check, control]);

    //handle approve
    const handleApprove=id => {
        const url=`https://immense-escarpment-32991.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                setCheck(!check)
                console.log('Poree',check);
            })
        .finally()
    }
const handleDelete=(id) => {
  // var sure=window.confirm(`Are you sure you want to delete this order?`);
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
    };
     //table index variable
    let index=1;

    return (
        <div className='manage-order-container'>
        <h1 className='text-center all-order-title'>HERE IS ALL ORDERS</h1>
        <p className='text-center all-order-p'>You can make status pending to shipped or delete the product</p>
            <div className='table-responsive'>
<table class="table table-hover table-light table-responsive-sm">
<thead>
    <tr>
      <th scope="col">#</th>
       <th scope="col">User Info</th>
       <th scope="col">Order Info</th>
      <th scope="col">Status</th>
      <th scope="col">Delete</th>
    </tr>
                </thead>
                 <tbody>
            {
                        orders.map(service => <tr>
                            <th scope="row">{index++}</th>
                            <td className='fs-4 fw-bold user-info'>{service.displayName} <br /> {service.email} <br /> {service.phonenumber}</td>
                          <td className='fs-5 fw-bold'>
                            <img className='img-fluid' src={service.img} alt="" width="100px"/> <br />
                            {service.Name} <br /> ${service.price}</td>

                            <td>
                                {
                        service.status? <button className='btn btn-success' onClick={() => handleApprove(service._id)} disabled>Shipped</button>:<button className='btn btn-success' onClick={() => handleApprove(service._id)}>Pending</button>
                    }
                            </td>
                            <td>
                                <button
                onClick={()=> handleDelete(service._id)}
                className="btn btn-danger"
              >Delete</button>
                            </td>

                </tr>)
                }</tbody>
                </table></div>
        </div>
    );
};

export default ManageOrders;