import React, {useEffect} from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import MakeAdmin from './MakeAdmin';
import './MakeAdmin.css'
const MakeAdminPage=() => {
    // Title Change
     useEffect(() => {
        document.title="Make Admin";
    }, []);
    return (
        <div className='make-admin-page'>
            <NavBar></NavBar>
            <br /> <br />
            <div className="container admin-page">
                <MakeAdmin ></MakeAdmin>
            </div>
            <br />
            <br />
            <Footer></Footer>

        </div>
    );
};

export default MakeAdminPage;