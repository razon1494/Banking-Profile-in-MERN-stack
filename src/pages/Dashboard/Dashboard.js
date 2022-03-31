import React, {useEffect} from 'react';
import {Button, Col, Row, Spinner} from 'react-bootstrap';
import useAuth from '../../context/useAuth';
import NavBar from '../Shared/NavBar/NavBar';
import DashBoardHome from './DashboardHome/DashBoardHome';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom"
import Review from './Review/Review';
import ManageOrders from './ManageOrders/ManageOrders';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './Make Admin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Footer from '../Home/Footer/Footer';
import './Dashboard.css'
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import UserRoute from '../Login/UserRoute/UserRoute';
// import UserRoute from '../Login/UserRoute/UserRoute';
const Dashboard=() => {
    //Title Change
 useEffect(() => {
        document.title="Dashboard";
    }, []);
    const {user,isLoading, admin, logout}=useAuth();
    console.log(admin);
    let {path, url}=useRouteMatch();
    const history=useHistory();

    if(isLoading) { return <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning" />  </div>;}

    return (
        <div>
            <NavBar></NavBar>
        <div className='full-dashboard  bg-black'>
        <div className='container dashboard-container'>
            {!isLoading && <Row className='justify-content-center '>
                        <Col className='dashboard-panel bg-black mt-1 ' xs={12} md={5} lg={3}>
                            <br /><br /><br />
                            <div className=' d-flex flex-column justify-content-center align-items-center'>

                        {
                            admin ? <div >
                                <Link className='links my-3' to={`${url}/manageorders`}> <button className='button-30 my-3'>Manage All Orders</button> </Link>
                        <br />
                        <Link className='links' to={`${url}/addproduct`}> <button className='button-30 my-3'> Add A New Product</button></Link>
                        <br />
                        <Link className='links' to={`${url}/makeadmin`}><button className='button-30 my-3'> Create An Admin </button></Link>
                        <br />
                        <Link className='links' to={`${url}/manageproducts`}><button className='button-30 my-3'> Manage Products</button></Link>
                            </div>:<div>
                        {/* For General user routes */}
                        <Link className='links' to={`${url}/pay`}><button className='button-30 my-3'> Pay Your bill</button></Link>
                        <br />
                        <Link className='links' to={`${url}/myorder`}><button className='button-30 my-3'> My Orders</button></Link>
                        <br />
                        <Link className='links' to={`${url}/review`}><button className='button-30 my-3'> Review</button></Link>
                        <br /><br />

                        </div>
                        }



                        <button onClick={()=>logout(history)} className='button-30 my-5 px-4' as={Link} to="/login" >Logout</button></div>
                </Col>
                        <Col className='dashboard-routing' xs={12} md={7} lg={9}>
                            <br /><br /><br />
                        <Switch>
                                <Route exact path={path}>
                                <DashBoardHome></DashBoardHome>
                                </Route>
                                <AdminRoute path={`${path}/manageorders`}>
                                <ManageOrders></ManageOrders>
                                </AdminRoute>
                                <AdminRoute path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                                </AdminRoute>
                                <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                                </AdminRoute>

                                <Route exact path={path}>
                                <DashBoardHome></DashBoardHome>
                                </Route>
                                <UserRoute path={`${path}/pay`}>
                                <Payment></Payment>
                                </UserRoute>
                                <UserRoute path={`${path}/review`}>
                                <Review></Review>
                                </UserRoute>
                                <UserRoute path={`${path}/myorder`}>
                                <MyOrders></MyOrders>
                                </UserRoute>
                                <Route exact path='*'>
                                <DashBoardHome></DashBoardHome>
                                </Route>

                            </Switch>


{/*
<Switch>
<Route exact path={path}>
<DashboardHome></DashboardHome>
</Route>
<Route exact path={`${path}/pay`}>
<Payment></Payment>
</Route>
<Route exact path={`${path}/review`}>
<Review></Review>
</Route>
<Route path={`${path}/myorder`}>
<MyOrders></MyOrders>
</Route>
<Route path={`${path}/myorder`}>
<MyOrders></MyOrders>
</Route>
<Route path={`${path}/manageorders`}>
<ManageOrders></ManageOrders>
</Route>
<Route path={`${path}/addproduct`}>
<AddProduct></AddProduct>
</Route>
<Route path={`${path}/makeadmin`}>
<MakeAdmin></MakeAdmin>
</Route>
<Route path={`${path}/manageproducts`}>
<ManageProducts></ManageProducts>
</Route>
</Switch>
<Route path='' element={<DashBoardHome></DashBoardHome>}/>
<Route path='pay' element={<Payment></Payment>}/>
<Route path='myorder' element={<MyOrders></MyOrders>}/>
<Route path='review' element={<Review></Review>}/>
<Route path='manageorders' element={<ManageOrders></ManageOrders>}/>
<Route path='addproduct' element={<AddProduct></AddProduct>} />
<Route path='makeadmin' element={<MakeAdmin></MakeAdmin>} />
<Route path='manageproducts' element={<ManageProducts></ManageProducts>} />

                        */}
                </Col>
            </Row>}


            </div></div>
            <Footer></Footer>
         </div>
    );
};

export default Dashboard;