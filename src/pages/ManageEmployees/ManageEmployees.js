import { useState } from "react";
import useAuth from "../../context/useAuth";
import AllEmployees from "./AllEmployees";
import "./Manageemployees.css";
import MyBranch from "./MyBranch";
const ManageEmployees = () => {
  const [toggle, setToggle] = useState(true);
  const { person } = useAuth();

  return (
    <div>
      {/* <h2 className="text-center">Manage Your employees </h2> */}
      <div className="toggle text-center m-0">
        <button
          className={`mx-4 fs-2 ${toggle ? "activeBranch" : "deactiveBranch"}`}
          onClick={() => setToggle(true)}
        >
          My Branch ({person.branchName})
        </button>
        <button
          className={`mx-4 fs-2 ${!toggle ? "activeBranch" : "deactiveBranch"}`}
          onClick={() => setToggle(false)}
        >
          All Employees
        </button>
      </div>
      <div className="container">
        {toggle ? <MyBranch></MyBranch> : <AllEmployees></AllEmployees>}
      </div>
    </div>
  );
};

export default ManageEmployees;
