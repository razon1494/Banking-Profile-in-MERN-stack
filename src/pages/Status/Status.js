import Container from "react-bootstrap/Container";
import useAuth from "../../context/useAuth";
const Status = (isLoading) => {
  const { person } = useAuth();
  console.log(person?.salary.Branches);

  if (isLoading === true || person === null || person === undefined) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only text-center">Loading...</span>
        </div>
      </div>
    );
  }
  const promotions = person?.salary?.promotions;
  const branches = person?.salary?.Branches;
  return (
    <Container>
      <h1 className="text-center">Promotion Status</h1>
      <table class="table table-hover table-light table-responsive-sm">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((promotion) => (
            <tr>
              <td>{promotion.revisionNo}</td>
              <td>{promotion.fromDesignation}</td>
              <td>{promotion.toDesignation}</td>
              <td>{promotion.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /> <br />
      <h1 className="text-center">Promotion Status</h1>
      <table class="table table-hover table-light table-responsive-sm">
        <thead>
          <tr>
            <th>Branch Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Positions Worked</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr>
              <td>{branch.branchName}</td>
              <td>{branch.startDate}</td>
              <td>{branch.endDate}</td>
              <td>
                {branch.positions.map((position) => (
                  <p>{position}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Status;
