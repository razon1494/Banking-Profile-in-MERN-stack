import { useEffect, useState } from "react";
import useAuth from "../../../context/useAuth";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  //Title Change
  useEffect(() => {
    document.title = "G.Chairs";
  }, []);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewloading, setReviewLoading] = useState(true);
  const { user } = useAuth();
  // getting users/employees from db
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {/* First Part Navbar  */}
      <NavBar></NavBar>
      <div className="my-5">
        <br /> <br />
      </div>
      {/* Last (sixth) Footer Part */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
