import React, {useEffect} from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AddProduct from './AddProduct';
import './AddProduct.css'
// This is fro navigation page
const AddProductsPage=() => {
    // Title change
     useEffect(() => {
        document.title="ADD CHAIR";
    }, []);
    return (
        <div className='add-page'>
            <NavBar></NavBar>
            <br /> <br />
            <div className="container ">
                <AddProduct></AddProduct>
            </div>
            <br />
            <br />
            <Footer></Footer>

        </div>
    );
};

export default AddProductsPage;