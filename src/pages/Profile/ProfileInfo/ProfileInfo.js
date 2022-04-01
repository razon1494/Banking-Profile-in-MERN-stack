const ProfileInfo = ({ person }) => {
  console.log(person, "in infoooooooooooooo");
  return (
    <div>
      {/* <div className="row my-3">
        <div className="col-md-5 basic-intro">
          {gender === "male" ? (
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
      </div> */}
    </div>
  );
};

export default ProfileInfo;
