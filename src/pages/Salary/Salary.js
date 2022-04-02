import useAuth from "../../context/useAuth";
import "./Salary.css";
const Salary = () => {
  const { person } = useAuth();
  console.log(person);
  const salaryList = person.salary.grandSalary;
  const { basicPay, houseRent, conveyance, Medical, houseMaintanence } =
    salaryList;

  return (
    <div className="container mt-2">
      <h2 className="mb-5">Salary Details:</h2>
      <table class="table table-hover table-light table-responsive-sm">
        <thead></thead>
        <tbody>
          <tr>
            <th></th>
            <th>Basic Pay</th>
            <th>{basicPay}</th>
          </tr>
          <tr>
            <td></td>
            <td>Conveyance</td>
            <td>{conveyance}</td>
          </tr>
          <tr>
            <td></td>
            <td>Medical</td>
            <td>{Medical}</td>
          </tr>
          <tr>
            <td></td>
            <td>House Rent</td>
            <td>{houseRent}</td>
          </tr>
          <tr>
            <td></td>
            <td>House Maintanence</td>
            <td>{houseMaintanence}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th></th>
            <th>Grand Total</th>
            <th>
              {basicPay + houseMaintanence + Medical + conveyance + houseRent}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Salary;
