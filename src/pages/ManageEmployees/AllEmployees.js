import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const AllEmployees = () => {
  const { users } = useAuth();
  const handleDelete = (id) => {
    console.log("hit");
  };
  let index = 1;
  return (
    <div>
      <div className="table-responsive">
        <table class="table table-hover table-light table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Branch</th>
              <th scope="col">View/Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th scope="row">{index++}</th>
                <td className="fs-4 fw-bold user-info">{user.name}</td>
                <td className="fs-4 fw-bold user-info">
                  {user.presentDesignation}
                </td>
                <td className="fs-4 fw-bold user-info">{user.branchName}</td>
                <td className="fs-4 fw-bold user-info">
                  <Link to={`employee/${user._id}`} className="btn btn-success">
                    Details/Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployees;
