import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../context/useAuth";
const TransferForm = ({ person }) => {
  const { dateToString } = useAuth();
  const [change, setChange] = useState(true);
  const { setIsLoading } = useAuth();
  const updatePerson = async (id) => {
    setIsLoading(true);
    await axios
      .put(`http://localhost:5000/employee/${id}`, demoPerson)
      .then((res) => {
        setIsLoading(false);
        Swal.fire("ADDED!", "Your Product Is Now Live!", "success");
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [demoPerson, setDemoPerson] = useState({});
  useEffect(() => {
    setDemoPerson(person);
  }, [person]);
  //   setDemoPerson(person);
  // console.log(person.salary.Branches, "Baire");
  const onSubmit = (data) => {
    const transfer = {
      startDate: dateToString(new Date()),
      endDate: "Current",
      branchName: data.branchName,
      positions: [person.presentDesignation],
    };
    if (person.salary) {
      const branches = person.salary.Branches;
      branches[branches.length - 1].endDate = dateToString(new Date());
      branches.push(transfer);
      person.salary.Branches = branches;
      person.branchName = data.branchName;
      updatePerson(person._id);
    }
  };
  return (
    <div>
      <div className="form-container container">
        <form
          className="form row align-items-center justify-content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="d-inline col-md-3">New Branch: </h4>
          <div className="col-md-8">
            <input
              className="py-3 my-3 form-control"
              {...register("branchName", { required: true })}
              placeholder="Branch Name"
            />
          </div>
          <br />

          <input
            className="w-25 button-84 submit-part py-2 my-3 fs-3"
            type="submit"
            value="Transfer"
          />
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
