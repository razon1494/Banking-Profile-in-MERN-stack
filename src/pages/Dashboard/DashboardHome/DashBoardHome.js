import React, {useEffect} from 'react';
import useAuth from '../../../context/useAuth';
import './DashBoardHome.css'
const DashBoardHome=() => {
     useEffect(() => {
        document.title="Dashboard";
    }, []);
    const {user, admin}=useAuth();
    return (
        <div className='dbhome'>
            {/* For Admin */}
            {
                admin&&<div className='admin-div container'>
                    <h1>Hello, <span className='username'>{user.displayName} </span> <br /> Welcome as an Admin </h1>
                    <h2> <i class="fas fa-angle-double-right"></i>This is your DashBoard</h2>
                    <h2> <i class="fas fa-angle-double-right"></i>In left side you got 4 options</h2>

                    <h3> <i class="fas fa-arrow-right"></i> Manage All User's orders in 'Manage All Orders' segment</h3>
                    <h3> <i class="fas fa-arrow-right"></i> You can add a new product in 'Add A New Product' segment</h3>
                    <h3> <i class="fas fa-arrow-right"></i> You can make another admin in 'Create An Admin' segment</h3>
                    <h3> <i class="fas fa-arrow-right"></i> You can delete existing products in 'Manage Products' segment</h3>
                </div>
            }
            {/* For User */}
            {
                !admin&&<div className='admin-div container'>
                    <h1>Hello, <span className='username'>{user.displayName} </span> <br /> You Are Our Valuable Customer</h1>
                    <h2> <i class="fas fa-angle-double-right"></i>This is your DashBoard</h2>
                    <h2> <i class="fas fa-angle-double-right"></i>In left side you got 3 options</h2>

                    <h3> <i class="fas fa-arrow-right"></i> Pay Your Pending Bills in 'Pay Your Bill' segment</h3>
                    <h3> <i class="fas fa-arrow-right"></i> See Your Orders in 'My Orders' segment, You can also delete your orders there</h3>
                    <h3> <i class="fas fa-arrow-right"></i> You can give a review us with rating in 'Review' segment</h3>
                </div>
            }
        </div>
    );
};

export default DashBoardHome;