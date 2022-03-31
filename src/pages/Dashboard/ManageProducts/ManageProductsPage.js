import React, {useEffect} from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import ManageProducts from './ManageProducts';
import './ManageProducts.css'
const ManageProductsPage=() => {
      //Title Change
 useEffect(() => {
        document.title="Manage Products";
 }, []);
    return (
        <div className='manage-page'>
            <NavBar></NavBar>
            <br /> <br />
            <div className="container">
                <ManageProducts></ManageProducts>
            </div>
            <br />
            <br />
            <Footer></Footer>

        </div>
    );
};

export default ManageProductsPage;