import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../context/useAuth";
import "./Registration.css";
const Registration = () => {
  //Title Change
  useEffect(() => {
    //title change
    document.title = "Add User";
  }, []);

  const location = useLocation();
  const history = useHistory();
  // const redirect_uri = location.state?.from.pathname || "/register";
  const { user, registerUser, isLoading, authError, addUser } = useAuth();
  const [userData, setUserData] = useState({});
  const [startDate, setStartDate] = useState("2015-03-25");
  console.log(startDate);

  //function to handle register
  const handleRegisterSubmit = (e) => {
    if (userData.password !== userData.password2) {
      // alert('password did not match');
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Sorry...Rejected",
        text: `Password Did Not Matched`,
      });
      return;
    }
    const userName = userData.fname + " " + userData.lname;
    userData["userName"] = userName;

    registerUser(userData.email, userData.password, history, userData);
    console.log("with user name", userData);

    addUser(userData);
    e.preventDefault();
  };
  //function to save the given data
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);

    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
    e.preventDefault();
  };

  return (
    <div className="signup">
      <div className="login-welcome py-4 mb-4">
        <h2 className="text-center fw-bold">
          Register New User By Giving All Details Here
        </h2>
      </div>
      <div className="container mx-auto">
        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <label className="fs-4 label fw-bold" for="exampleInputEmail1">
              First Name
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input w-75  mb-4 form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your First Name"
              name="fname"
            />
            <label className="fs-4 label fw-bold" for="exampleInputEmail1">
              Last Name
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input  w-75 mb-4 form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Last Name"
              name="lname"
            />
            <label className="fs-4 label fw-bold" for="exampleInputEmail1">
              Email address
            </label>
            <input
              onBlur={handleOnBlur}
              type="email"
              className="input w-75  form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Date OF Birth
            </label>
            <input
              onBlur={handleOnBlur}
              type="date"
              className="input  w-75  form-control"
              id=""
              placeholder="dob"
              name="dob"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Contact
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input  w-75  form-control"
              id=""
              placeholder="Contact Number"
              name="contact"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Address
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input  w-75  form-control"
              id=""
              placeholder="Address"
              name="address"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              NID
            </label>
            <input
              onBlur={handleOnBlur}
              type="number"
              className="input  w-75  form-control"
              id=""
              placeholder="NID"
              name="NID"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Branch
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input  w-75  form-control"
              id=""
              placeholder="branch"
              name="branch"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Department
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input  w-75  form-control"
              id=""
              placeholder="department"
              name="department"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Designation
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input  w-75  form-control"
              id=""
              placeholder="Designation"
              name="designation"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Gender
            </label>
            <select
              onBlur={handleOnBlur}
              className="input  w-75  form-control"
              name="gender"
            >
              <option value="Male">Male</option>
              <option value="Male">Female</option>
            </select>
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="">
              Role
            </label>
            <select
              onBlur={handleOnBlur}
              className="input  w-75  form-control"
              name="role"
            >
              <option value="Male">User</option>
              <option value="Male">Branch Manager</option>
              <option value="Male">Admin</option>
            </select>
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              Education
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="input  w-75  form-control"
              id="exampleInputPassword1"
              placeholder="Education"
              name="education"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              Basic Salary
            </label>
            <input
              onBlur={handleOnBlur}
              type="number"
              className="input  w-75  form-control"
              id="exampleInputPassword1"
              placeholder="basicSalary"
              name="basicSalary"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              Medical
            </label>
            <input
              onBlur={handleOnBlur}
              type="number"
              className="input  w-75  form-control"
              id="exampleInputPassword1"
              placeholder="medical"
              name="medical"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              House Rent
            </label>
            <input
              onBlur={handleOnBlur}
              type="number"
              className="input  w-75  form-control"
              id="exampleInputPassword1"
              placeholder="houseRent"
              name="houseRent"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              House Maintenance
            </label>
            <input
              onBlur={handleOnBlur}
              type="number"
              className="input  w-75  form-control"
              id="exampleInputPassword1"
              placeholder="houseMaint"
              name="houseMaint"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              Conveyance
            </label>
            <input
              onBlur={handleOnBlur}
              type="number"
              className="input  w-75  form-control"
              id="exampleInputPassword1"
              placeholder="conveyance"
              name="conveyance"
            />
          </div>
          <div className="form-group my-4">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              Password
            </label>
            <input
              onBlur={handleOnBlur}
              type="password"
              className="input  w-75  form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="form-group">
            <label className="fs-4 label fw-bold" for="exampleInputPassword1">
              Confirm Password
            </label>
            <input
              onBlur={handleOnBlur}
              type="password"
              className="input w-75 mb-4 form-control"
              id="exampleInputPassword1"
              placeholder="Re-type Password"
              name="password2"
            />
          </div>
          <div className="form-check"></div>
          <button type="submit" className="button-84 px-5 mb-3">
            Submit
          </button>
        </form>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Registration;
