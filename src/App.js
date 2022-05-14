import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddProductsPage from "./pages/Dashboard/AddProduct/AddProductsPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdminPage from "./pages/Dashboard/Make Admin/MakeAdminPage";
import ManageProductsPage from "./pages/Dashboard/ManageProducts/ManageProductsPage";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Leave from "./pages/Leave/Leave";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import ManageEmployees from "./pages/ManageEmployees/ManageEmployees";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Registration from "./pages/Registration/Registration";
import Salary from "./pages/Salary/Salary";
import SendMessage from "./pages/SendMessage/SendMessage";
import NavBar from "./pages/Shared/NavBar/NavBar";
import Status from "./pages/Status/Status";

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
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            {/* Private Route for both user and admin */}
            <PrivateRoute exact path="/salary">
              <Salary />
            </PrivateRoute>
            <PrivateRoute exact path="/leave">
              <Leave />
            </PrivateRoute>
            <PrivateRoute exact path="/status">
              <Status />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            {/* Admin Route Only for admin */}
            <AdminRoute exact path="/sendmessage/:id">
              <SendMessage></SendMessage>
            </AdminRoute>
            <AdminRoute exact path="/manageeployees">
              <ManageEmployees></ManageEmployees>
            </AdminRoute>
            <AdminRoute exact path="/employee/:id">
              <EmployeeDetails></EmployeeDetails>
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
            <AdminRoute exact path="/register">
              <Registration />
            </AdminRoute>
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
