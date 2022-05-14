import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import useAuth from "../../context/useAuth";
import userimg from "../../images/male.png";
import userimg2 from "../../images/pngwing.com.png";
import PromotionForm from "./PromotionForm";
import TransferForm from "./TransferForm";
const EmployeeDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [person, setPerson] = useState({});
  const [promotionShow, setPromotionShow] = useState({ display: "none" });
  const [transferShow, setTransferShow] = useState({ display: "none" });

  const { isLoading, setIsLoading } = useAuth();
  const [control, setConrol] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/singleusers/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, [isLoading]);

  console.log(person);
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

  if (isLoading === true || person === null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only text-center">Loading...</span>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    let sure = false;
    const id = person._id;
    setPromotionShow({ display: "none" });
    setTransferShow({ display: "none" });
    Swal.fire({
      title: "Are you sure?",
      text: `${id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          // setSure(true);
          sure = true;
        }
      })
      .then(() => {
        if (sure) {
          console.log("object", id);
          setIsLoading(true);

          fetch(`http://localhost:5000/deleteemployee/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                setConrol(!control);
                sure = true;
                console.log(sure);
                Swal.fire("Deleted!", "Emplyee Will be archived", "success");
                history.push("/manageeployees");
                setIsLoading(false);
              } else {
                setConrol(false);
              }
            });
        }
      });

    console.log(id);
  };
  const handlePromotion = () => {
    console.log("promote");
    setPromotionShow({ display: "block" });
    setTransferShow({ display: "none" });
  };
  const handleTransfer = () => {
    setPromotionShow({ display: "none" });
    setTransferShow({ display: "block" });
  };

  return (
    <div className="container">
      <h2 className="welcome text-start mb-5">{name}'s Profile </h2>
      <div className="row my-3">
        <div className="col-md-5 basic-intro">
          {gender === "female" ? (
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
      <Row>
        <button
          onClick={handlePromotion}
          className="col-md-3 btn btn-success mx-3"
        >
          Promotion
        </button>
        <button
          onClick={handleTransfer}
          className="col-md-3 btn btn-warning mx-3"
        >
          Transfer
        </button>
        <button onClick={handleDelete} className="col-md-3 btn btn-danger mx-3">
          Remove
        </button>
      </Row>
      <div className="" style={promotionShow}>
        <PromotionForm person={person}></PromotionForm>
      </div>
      <div className="" style={transferShow}>
        <TransferForm person={person}></TransferForm>
      </div>
      <div onClick={() => handleDelete()}></div>
    </div>
  );
};

export default EmployeeDetails;
