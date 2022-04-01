import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";
// import {Spinner} from 'react-bootstrap';
import logo from "../../images/logo.png";
import Footer from "../Home/Footer/Footer";
import "./Login.css";
const Login = () => {
  //Title Change
  useEffect(() => {
    //title change
    document.title = "Login AB User";
  }, []);
  //for redirect getting location and history
  const location = useLocation();
  const history = useHistory();
  const {
    user,
    checkAdmin,
    setCheckAdmin,
    loginUser,
    isUser,
    admin,
    isLoading,
    signInWithGoogle,
    authError,
  } = useAuth();
  const [loginData, setLoginData] = useState({});
  //taking data and save it in state
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(checkAdmin, "before");
    let toggle = !checkAdmin;
    console.log(toggle, "toggle");
    setCheckAdmin(toggle);
    console.log(checkAdmin, "after");
  };
  //calling login function
  const handleLoginSubmit = (e) => {
    setCheckAdmin(!checkAdmin);
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <div>
      <div className="login-full">
        <div className="login-welcome py-3 container">
          <div className="img-part">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleLoginSubmit}>
            <div className="my-5">
              <h4 className="mx-auto d-inline me-5">
                <label for="exampleInputEmail1 " className="label fs-3 fw-bold">
                  Email address{" "}
                </label>
              </h4>
              <input
                onChange={handleOnChange}
                type="email"
                className="form-control d-inline p-3 w-50 mx-auto"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group my-3 ">
              <h4 className="mx-auto d-inline me-5">
                {" "}
                <label
                  for="exampleInputPassword1"
                  className="label fs-3 fw-bold"
                >
                  Password
                </label>
              </h4>
              <input
                className="form-control p-3 d-inline w-50 ms-md-5 mx-auto"
                onChange={handleOnChange}
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>{" "}
            <br />
            <button type="submit" className="button-84 px-5 my-3 ">
              Log In
            </button>
          </form>
          <h5>
            {" "}
            <Link to="/register" className="toggle">
              New User? Please Register
            </Link>
          </h5>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
