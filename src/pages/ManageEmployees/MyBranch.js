import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const MyBranch = () => {
  const { users, person, isLoading } = useAuth();
  if (isLoading === true || person === null || !users) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only text-center">Loading...</span>
        </div>
      </div>
    );
  }
  const branchUsers = users.filter(
    (user) => user.branchName === person.branchName
  );

  let index = 1;
  return (
    <div>
      <h1>My Branch</h1>
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
            {branchUsers.map((user) => (
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

export default MyBranch;
