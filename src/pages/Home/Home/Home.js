import { useEffect, useState } from "react";
import useAuth from "../../../context/useAuth";
import "./Home.css";

const Home = () => {
  //Title Change
  useEffect(() => {
    document.title = "AB Profile";
  }, []);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewloading, setReviewLoading] = useState(true);
  const { user } = useAuth();
  const [person, setPerson] = useState({});
  // getting users/employees from db
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/getuser/${user.email}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.user));
  }, [user]);

  return (
    <div>
      {/* First Part Navbar  */}
      <div className="my-5">{person.email}</div>
      <div className="my-5">{person.name}</div>
      {/* Last (sixth) Footer Part */}
    </div>
  );
};

export default Home;
