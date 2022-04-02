import { useForm } from "react-hook-form";
import useAuth from "../../context/useAuth";
const LeaveApplication = () => {
  const { user, person, GetPerson, isLoading } = useAuth();
  GetPerson(user.email);
  const { register, handleSubmit, reset } = useForm();

  let today = new Date().toLocaleDateString();

  const onSubmit = (data) => console.log(data);
  if (!person) {
    return <div className="">Loading....</div>;
  }
  return (
    <div>
      <h1 className="my-5 text-center">Apply For Leave</h1>
      <div className="container">
        <h3>Name: {person.name}</h3>
        <h3>Branch: {person.branchName}</h3>
        <h3>Applied Date: {today}</h3>
        <h6 className="text-center text-danger">Please fill up the form </h6>
      </div>

      <form
        className="form row align-items-center justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="d-inline col-md-3">Apply For : </h4>
        <div className="col-md-8 ">
          <select
            className="form-control py-3 my-3 "
            {...register("leaveType")}
          >
            <option value="Casual Leave">Casual Leave (CL)</option>
            <option value="Paid Leave">Paid Leave (PL)</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Medical Leave">Medical Leave</option>
            <option value="Without Pay Leave">Leave Without Pay</option>
            <option value="CTS">Leave Without Pay (CTS)</option>
          </select>
        </div>
        <br />
        <br />

        <h4 className="d-inline col-md-3">Leave From : </h4>
        <div className="col-md-8">
          <input
            className="form-control py-3 my-3"
            {...register("leaveFrom", { required: true })}
            type="date"
          />
        </div>
        <h4 className="d-inline col-md-3">Leave To : </h4>
        <div className="col-md-8">
          <input
            className="form-control py-3 my-3"
            {...register("leaveTo", { required: true })}
            type="date"
          />
        </div>
        <h4 className="d-inline col-md-3">Total Days : </h4>
        <div className="col-md-8">
          <input
            className="form-control py-3 my-3"
            {...register("totalDays", { required: true })}
            placeholder="Short Description About product"
            type="number"
          />
        </div>
        <br />
        <br />
        <h3 className="my-4 text-center">Purpose Of Leave</h3>
        <textarea
          className="form-control m-3 p-4 w-75"
          {...register("details", { required: true })}
          placeholder="Details"
        />
        <br />
        <br />
        <input className="w-25 button-84  py-2 my-3 fs-3" type="submit" />
      </form>
    </div>
  );
};

export default LeaveApplication;
