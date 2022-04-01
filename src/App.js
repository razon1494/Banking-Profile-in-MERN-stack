import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddProductsPage from "./pages/Dashboard/AddProduct/AddProductsPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdminPage from "./pages/Dashboard/Make Admin/MakeAdminPage";
import ManageOrdersPage from "./pages/Dashboard/ManageOrders/ManageOrdersPage";
import ManageProductsPage from "./pages/Dashboard/ManageProducts/ManageProductsPage";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Registration from "./pages/Registration/Registration";
import Salary from "./pages/Salary/Salary";
import NavBar from "./pages/Shared/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            {/* Home ROute for everyone public */}
            <Route exact path="/">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/home">
              <Home />
            </PrivateRoute>
            <Route exact path="/profile">
              <Profile />
            </Route>
            {/* Private Route for both user and admin */}
            <PrivateRoute exact path="/salary">
              <Salary />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            {/* Admin Route Only for admin */}
            <AdminRoute exact path="/manageorders">
              <ManageOrdersPage></ManageOrdersPage>
            </AdminRoute>
            <AdminRoute exact path="/addproducts">
              <AddProductsPage></AddProductsPage>
            </AdminRoute>
            <AdminRoute exact path="/manageproducts">
              <ManageProductsPage></ManageProductsPage>
            </AdminRoute>
            <AdminRoute exact path="/makeadmin">
              <MakeAdminPage></MakeAdminPage>
            </AdminRoute>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Registration />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
