import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../context/useAuth";
const PromotionForm = ({ person }) => {
  const { dateToString } = useAuth();
  const [change, setChange] = useState(true);
  const { setIsLoading } = useAuth();
  const updatePerson = async (id) => {
    setIsLoading(true);
    await axios
      .put(`http://localhost:5000/employee/${id}`, demoPerson)
      .then((res) => {
        console.log(res);
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
  let jsonPromotion;
  const onSubmit = (data) => {
    const promotion = {
      date: dateToString(new Date()),
      fromDesignation: person.presentDesignation,
      toDesignation: data.newDesignation,
      revisonNo: person.salary.promotions.length + 1,
    };
    console.log(person);
    setDemoPerson(person);
    demoPerson.presentDesignation = data.newDesignation;
    if (demoPerson.salary?.promotions) {
      demoPerson.salary.promotions.push(promotion);
    } else {
      console.log("in else", demoPerson.salary);
      console.log("in else demo", demoPerson);
      demoPerson.salary.promotions = [];
      demoPerson.salary.promotions.push(promotion);
    }
    // delete demoPerson._id;
    console.log(demoPerson);
    jsonPromotion = JSON.stringify(demoPerson);

    // console.log(JSON.stringify(demoPerson));
    //   JSON.stringify(demoPerson);
    updatePerson(person._id);
  };
  return (
    <div>
      <div className="form-container container">
        <form
          className="form row align-items-center justify-content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="d-inline col-md-3">New Designation: </h4>
          <div className="col-md-8">
            <input
              className="py-3 my-3 form-control"
              {...register("newDesignation", { required: true })}
              placeholder="Designation"
            />
          </div>
          <br />

          <br />
          <h4 className="d-inline col-md-3">Branch : </h4>
          <div className="col-md-8">
            <input
              className="form-control py-3 my-3"
              {...register("branch", { required: true })}
              placeholder="Branch"
            />
            <h2 className="text-center">Salary Increase</h2>
          </div>
          <br />
          <br />
          <h4 className="d-inline col-md-3">Basic Salary : </h4>
          <div className="col-md-8">
            <input
              className="form-control py-3 my-3"
              {...register("newBasicSalary", { required: true })}
              placeholder="Basic Salary"
            />
          </div>
          <br />
          <br />

          <h4 className="d-inline col-md-3">House Rent : </h4>
          <div className="col-md-8">
            <input
              className="form-control py-3 my-3"
              type="number"
              {...register("houseRent", { required: true })}
              placeholder="House Rent"
            />
          </div>
          <br />

          <h4 className="d-inline col-md-3">Conveyance : </h4>
          <div className="col-md-8">
            <input
              className="form-control py-3 my-3"
              {...register("conveyance", { required: true })}
              placeholder="Conveyance"
            />
          </div>
          <h4 className="d-inline col-md-3">Medical : </h4>
          <div className="col-md-8">
            <input
              className="form-control py-3 my-3"
              {...register("Medical", { required: true })}
              placeholder="Medical"
            />
          </div>
          <h4 className="d-inline col-md-3">House Maintanance : </h4>
          <div className="col-md-8">
            <input
              className="form-control py-3 my-3"
              {...register("houseMaintanence", { required: true })}
              placeholder="House Maintanence"
            />
          </div>

          <input
            className="w-25 button-84 submit-part py-2 my-3 fs-3"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default PromotionForm;
