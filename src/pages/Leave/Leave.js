import { Spinner } from "react-bootstrap";
import useAuth from "../../context/useAuth";
import casual1 from "../../images/casual.png";
import pl from "../../images/pl.png";
import medical from "../../images/sick.png";
import sick from "../../images/sickM.png";
import leave1 from "../../images/u.png";
import "./Leave.css";
import LeaveApplication from "./LeaveApplication";
const Leave = () => {
  const { user, GetPerson, person } = useAuth();
  // GetPerson(user.email);
  if (!person?.email) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Spinner animation="grow" variant="danger" />
      </div>
    );
  }
  const { leave } = person;
  const {
    clAvailed,
    clBalance,
    ctsAvailed,
    leaveWithoutPayAvailed,
    mlAvailed,
    plAvailed,
    plBalance,
    slAvailed,
    slBalance,
  } = leave;
  return (
    <div className="container">
      <div class="card-deck align-items-center justify-content-center row g-3 my-3">
        <div class="card col-md-2 col-sm-4 col-xs-7 mx-3 leave-card  ">
          <img class="card-img-top img-fluid" src={casual1} alt="Card cap" />
          <div class="card-body">
            <h6 class="card-title">Casual Leave(CL)</h6>
            <h6 class="card-text">Balance: {clBalance}</h6>
            <h6 class="card-text">Availed: {clAvailed}</h6>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card col-md-2 col-sm-4 col-xs-7 mx-3 leave-card ">
          <img class="card-img-top" src={pl} alt="Card cap" />
          <div class="card-body">
            <h6 class="card-title">Paid Leave(PL)</h6>
            <h6 class="card-text">Balance: {plBalance}</h6>
            <h6 class="card-text">Availed: {plBalance}</h6>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card col-md-2 col-sm-4 col-xs-7 mx-3 leave-card ">
          <img class="card-img-top" src={sick} alt="Card cap" />
          <div class="card-body">
            <h6 class="card-title">Sick Leave(SL)</h6>
            <h6 class="card-text">Balance: {slBalance}</h6>
            <h6 class="card-text">Availed: {slAvailed}</h6>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card col-md-2 col-sm-4 col-xs-7 mx-3 leave-card ">
          <img class="card-img-top" src={medical} alt="Card cap" />
          <div class="card-body">
            <h6 class="card-title">Medical Leave (ML)</h6>
            <h6 class="card-text">Availed: {mlAvailed}</h6>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div class="card col-lg-2 col-md-2 col-sm-4 col-xs-7 mx-3 leave-card ">
          <img class="card-img-top" src={leave1} alt="Card cap" />
          <div class="card-body">
            <h6 class="card-title">Leave Without Pay</h6>
            <h6 class="card-text">Availed: {leaveWithoutPayAvailed}</h6>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        {/*  <div class="card col-md-2 col-sm-3 col-xs-1 leave-card ">
          <img class="card-img-top" src={leave} alt="Cap" />
          <div class="card-body">
            <h6 class="card-title">Leave Without Pay (CTS)</h6>
            <h6 class="card-text">Availed: 5</h6>

            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div> */}
      </div>
      <LeaveApplication person={person}></LeaveApplication>
    </div>
  );
};

export default Leave;
