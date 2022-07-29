import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./SendMessage.css";

const SendMessage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const { isLoading, setIsLoading, user } = useAuth();
  const [control, setConrol] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/singleusers/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, [isLoading]);

  console.log(person);
  const {
    name,
    gender,
    DOB,
    branchName,
    contactNumber,
    department,
    educationQualification,
    email,
    employeeID,
    firstName,
    joiningDate,
    joiningDesignation,
    lastName,
    lastPromotionDate,
    leave,
    presentDesignation,
    presentDistrict,
    presentThana,
    professionalQualification,
    trainingRecieved,
  } = person;

  if (isLoading === true || person === null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only text-center">Loading...</span>
        </div>
      </div>
    );
  }

  const handleOnBlur = (e) => {
    setMessage(e.target.value);
  };

  const hanldeSubmitClick = (e) => {
    console.log(process.env);
    emailjs.send(
      "service_fouyh05",
      "template_frgvbsa",
      {
        to_name: name,
        from_name: user.displayName,
        message: message,
        to_email: email,
      },
      process.env.REACT_APP_EMAIL_JS_KEY
    );

    document.getElementById("message").value = "";
  };
  return (
    <div className="container message-container">
      <h1>Send Text to: {name}</h1>
      <input
        onBlur={handleOnBlur}
        type="text"
        className="input  w-75 py-4 mb-4 form-control bg-light"
        id="message"
        placeholder="Enter Your Message"
        name="lname"
      />
      <button
        type="submit"
        onClick={hanldeSubmitClick}
        className="button-84 px-5 mb-3"
      >
        Submit
      </button>
      <h1></h1>
      <h1></h1>
      <h1></h1>
    </div>
  );
};

export default SendMessage;
