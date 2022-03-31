import React, {useEffect} from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../context/useAuth';
import {useState} from "react";
import './Registration.css'
import Footer from '../Home/Footer/Footer';
import Swal from 'sweetalert2';
// import {Spinner} from 'react-bootstrap';

const Registration=() => {
  //Title Change
  useEffect(() => {
   //title change
        document.title="Registation";
  }, []);

    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from.pathname||'/home';
    const {user, registerUser, isLoading, authError}=useAuth();
    const [userData, setUserData]=useState({});


 //function to handle register
    const handleRegisterSubmit=e => {
        if(userData.password!==userData.password2) {
            // alert('password did not match');
             Swal.fire({
  icon: 'error',
  title: 'Sorry...Rejected',
  text: `Password Did Not Matched`,
})
 return;
        }
        const userName=userData.fname+' '+userData.lname;
        userData['userName']=userName;

        registerUser(userData.email, userData.password,history,userData.userName)
        console.log('with user name', userData)
        e.preventDefault();
    }
    //function to save the given data
    const handleOnBlur=e => {
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value)

        const newUserData={...userData};
        newUserData[field]=value;
        setUserData(newUserData);
        e.preventDefault();
    }

    return (
        <div className='signup'>
            <div className="login-welcome py-4 mb-4">
            <h1 className='text-center fw-bold'>Welcome To G.Chairs</h1>
            <h2 className='text-center fw-bold'>Register Here</h2></div>
            <div className="container mx-auto">
            <form onSubmit={handleRegisterSubmit}>
                <div className="form-group">
    <label className='fs-4 label fw-bold' for="exampleInputEmail1">First Name</label>
    <input onBlur={handleOnBlur} type="text" className="input w-75  mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your First Name" name='fname'/>
    <label className='fs-4 label fw-bold' for="exampleInputEmail1">Last Name</label>
    <input onBlur={handleOnBlur} type="text" className="input  w-75 mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Last Name" name='lname'/>
    <label className='fs-4 label fw-bold' for="exampleInputEmail1">Email address</label>
    <input onBlur={handleOnBlur} type="email" className="input w-75  form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email'/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-4">
    <label className='fs-4 label fw-bold' for="exampleInputPassword1">Password</label>
    <input onBlur={handleOnBlur} type="password" className="input  w-75  form-control" id="exampleInputPassword1" placeholder="Password" name='password'/>
  </div>
  <div className="form-group">
    <label className='fs-4 label fw-bold' for="exampleInputPassword1">Confirm Password</label>
    <input onBlur={handleOnBlur} type="password" className="input w-75 mb-4 form-control" id="exampleInputPassword1" placeholder="Re-type Password" name='password2'/>
  </div>
  <div className="form-check">
  </div>
  <button type="submit" className="button-84 px-5 mb-3">Submit</button>
</form>


               <h5> <Link className='toggle' to='/login'>Already Registered? Login Here</Link></h5>



<br /><br />

            </div>
        <Footer></Footer>
        </div>
    );
};

export default Registration;