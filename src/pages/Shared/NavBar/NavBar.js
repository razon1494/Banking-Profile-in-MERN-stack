import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../../context/useAuth";
import mainlogo from "../../../images/logo.png";
import "./Navbar.css";

const NavBar = () => {
  const history = useHistory();
  //destructuring from auth context
  const { user, admin, isUser, logout } = useAuth();

  return (
    <div className="">
      <Navbar className="d-block navigation-bar" collapseOnSelect expand="lg">
        <div className="container">
          <Navbar.Brand>
            <NavLink to="/home" className="navbar-title">
              <img className="img-fluids" src={mainlogo} alt="" width="110" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {user?.email && (
                <>
                  <NavLink className="nav-items fs-6 px-3  py-2 " to="/profile">
                    Profile
                  </NavLink>
                  <NavLink className="nav-items fs-6 px-3  py-2 " to="/salary">
                    Salary
                  </NavLink>
                  <NavLink className="nav-items fs-6 px-3  py-2 " to="/leave">
                    Leave
                  </NavLink>
                  <NavLink className="nav-items fs-6 px-3  py-2 " to="/leave">
                    Status
                  </NavLink>
                </>
              )}

              {admin && (
                <NavLink
                  className="nav-items fs-6 px-3  py-2 "
                  to="/manageorders"
                >
                  Manage Employees
                </NavLink>
              )}
              {admin && (
                <NavLink
                  className="nav-items fs-6 px-3  py-2 "
                  to="/addproducts"
                >
                  Add Employee
                </NavLink>
              )}
              {admin && (
                <NavLink className="nav-items fs-6 px-3  py-2 " to="/makeadmin">
                  Make Admin
                </NavLink>
              )}
              {admin && (
                <NavLink
                  className="nav-items fs-6 px-3  py-2 "
                  to="/manageproducts"
                >
                  Send Message
                </NavLink>
              )}

              {/* {user?.email && (
                <NavLink className="nav-items fs-6 px-3  py-2 " to="/dashboard">
                  {admin ? <>Admin </> : <>User </>}Dashboard
                </NavLink>
              )} */}

              {user?.email ? (
                <button
                  onClick={() => logout(history)}
                  className="fs-6 nav-items py-2 px-3 me-2 fw-bold  text-start logout"
                  as={Link}
                  to="/"
                >
                  Logout
                </button>
              ) : (
                <Nav.Link
                  className="nav-items fs-6 px-3  py-2 fw-bold "
                  as={Link}
                  to="/login"
                >
                  Sign In
                </Nav.Link>
              )}
              <Navbar.Text>
                <p className="fs-6 ms-3 user-name fw-bold">
                  {user?.displayName}
                </p>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
