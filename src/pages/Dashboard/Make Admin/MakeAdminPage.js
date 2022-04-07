import { useEffect } from "react";
import Footer from "../../Home/Footer/Footer";
import MakeAdmin from "./MakeAdmin";
import "./MakeAdmin.css";
const MakeAdminPage = () => {
  // Title Change
  useEffect(() => {
    document.title = "Make Admin";
  }, []);
  return (
    <div className="make-admin-page">
      <br /> <br />
      <div className="container admin-page">
        <MakeAdmin></MakeAdmin>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};

export default MakeAdminPage;
