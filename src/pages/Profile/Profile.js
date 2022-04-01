import { useEffect, useState } from "react";
import useAuth from "../../context/useAuth";
import userimg from "../../images/male.png";
import userimg2 from "../../images/pngwing.com.png";
/* import userimg from "../../images/male.png";
import userimg2 from "../../images/pngwing.com.png"; */
import "./Profile.css";
const Profile = () => {
  //Title Change
  useEffect(() => {
    document.title = "AB Profile";
  }, []);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewloading, setReviewLoading] = useState(true);
  const { user } = useAuth();
  const [person, setPerson] = useState({});
  // getting users/employees from db
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/getuser/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data.user);
        setLoading(false);
      });
  }, [user.email]);
  /*  if (person !== null) {
    setLoading(false);
  } */
  /* const {
    name,
    gender,
    DOB,
    branchName,
    contactNumber,
    department,
    educationQualification,
    email,
    employeeID,
    firstName,
    joiningDate,
    joiningDesignation,
    lastName,
    lastPromotionDate,
    leave,
    presentDesignation,
    presentDistrict,
    presentThana,
    professionalQualification,
    trainingRecieved,
  } = person; */
  console.log(person);
  if (loading === true || person === null) {
    return <div>Loading................</div>;
  }
  const {
    name,
    gender,
    DOB,
    branchName,
    contactNumber,
    department,
    educationQualification,
    email,
    employeeID,
    firstName,
    joiningDate,
    joiningDesignation,
    lastName,
    lastPromotionDate,
    leave,
    presentDesignation,
    presentDistrict,
    presentThana,
    professionalQualification,
    trainingRecieved,
  } = person;
  return (
    <div className="container">
      <h2 className="welcome text-start mb-5">Welcome </h2>
      <div className="row my-3">
        <div className="col-md-5 basic-intro">
          {gender === "male" ? (
            <img className="img-fluid" src={userimg2} alt="" width="200px" />
          ) : (
            <img className="img-fluid" src={userimg} alt="" width="200px" />
          )}
          <h4>{name}</h4>
          <h4>{presentDesignation}</h4>
          <h5>{email}</h5>
          <h5>Phone {contactNumber}</h5>
          <h6>{professionalQualification}</h6>
          <div class="profile-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="col-md-7 full-intro">
          <h2>Official Details</h2>
          <p>Employee ID: {employeeID}</p>
          <p>Current Designation: {presentDesignation}</p>
          <p>Branch: {branchName}</p>
          <p>Department: {department}</p>
          <p>
            Joinning: {joiningDate} as {joiningDesignation}
          </p>
          <p></p>
          <p></p>
          <h2>Personal Details</h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Date Of Birth: {DOB}</p>
          <p>Education: {educationQualification}</p>
          <p>
            Present Address: {presentThana}, {presentDistrict}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
