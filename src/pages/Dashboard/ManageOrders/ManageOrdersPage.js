import React, {useEffect} from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import ManageOrders from './ManageOrders';
import './ManageOrders.css'
const ManageOrdersPage=() => {
    //Title Change
 useEffect(() => {
        document.title="Manage Orders";
    }, []);
    return (
        <div className='manage-order-page'>
            <NavBar></NavBar>
            <br /> <br />
            <div className="container">
                <ManageOrders></ManageOrders>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageOrdersPage;