import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddProductsPage from "./pages/Dashboard/AddProduct/AddProductsPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdminPage from "./pages/Dashboard/Make Admin/MakeAdminPage";
import ManageOrdersPage from "./pages/Dashboard/ManageOrders/ManageOrdersPage";
import ManageProductsPage from "./pages/Dashboard/ManageProducts/ManageProductsPage";
import Products from "./pages/Explore/Products/Products";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import Purchase from "./pages/Purchase/Purchase";
import Registration from "./pages/Registration/Registration";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            {/* Home ROute for everyone public */}
            <Route exact path="/">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/home">
              <Home />
            </PrivateRoute>
            <Route exact path="/products">
              <Products />
            </Route>
            {/* Private Route for both user and admin */}
            <PrivateRoute exact path="/purchase/:id">
              <Purchase />
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
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
