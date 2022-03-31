import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Products from './pages/Explore/Products/Products';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import DashBoardHome from './pages/Dashboard/DashboardHome/DashBoardHome';
import NavBar from './pages/Shared/NavBar/NavBar';
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/Dashboard/Payment/Payment';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Review from './pages/Dashboard/Review/Review';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './pages/Dashboard/Make Admin/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import ManageOrdersPage from './pages/Dashboard/ManageOrders/ManageOrdersPage';
import AddProductsPage from './pages/Dashboard/AddProduct/AddProductsPage';
import MakeAdminPage from './pages/Dashboard/Make Admin/MakeAdminPage';
import ManageProductsPage from './pages/Dashboard/ManageProducts/ManageProductsPage';
function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
        <Switch>
{/* Home ROute for everyone public */}
        <Route exact path="/"> <Home></Home> </Route>
        <Route exact path="/home"><Home /> </Route>
            <Route exact path="/products"><Products /></Route>
            {/* Private Route for both user and admin */}
        <PrivateRoute exact path="/purchase/:id"><Purchase/></PrivateRoute>
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
           {/* Admin Route Only for admin */}
            <AdminRoute exact path='/manageorders'>
              <ManageOrdersPage></ManageOrdersPage>
            </AdminRoute>
            <AdminRoute exact path='/addproducts'>
              <AddProductsPage></AddProductsPage>
            </AdminRoute>
            <AdminRoute exact path='/manageproducts'>
              <ManageProductsPage></ManageProductsPage>
            </AdminRoute>
            <AdminRoute exact path='/makeadmin'>
              <MakeAdminPage></MakeAdminPage>
            </AdminRoute>

            <Route exact path="/login"><Login/></Route>
            <Route exact path="/register"><Registration /></Route>
             <Route path="*"><NotFound/></Route>
      </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
