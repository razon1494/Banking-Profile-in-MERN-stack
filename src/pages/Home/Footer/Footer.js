import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            AB<span> BANK</span>
          </h3>

          <p class="footer-links">
            <Link to="" className="me-3">
              Background
            </Link>
            <Link to="/login" className="me-3">
              Information
            </Link>
            <Link to="/register" className="me-3">
              Vission & Mission
            </Link>
            <Link to="/products" className="me-3">
              Services
            </Link>
          </p>

          <p class="footer-company-name">Arifur Rahman Razon &copy; 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>The Skymark, 18 Gulshan Avenue,</span> Dhaka 1212,
              Bangladesh
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+88-09678555000</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:info@abbl.com">info@abbl.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            G.Chairs is the frist authorized Gaming Chair dealer in The World.
            We supply our chairs all over the world within 15 days. We Provide
            the lowest possible price and maintain the best quality service.
          </p>

          <div class="footer-icons">
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
        <div className="copyright mt-3 text-center text-light">
          <small>
            Copyright &copy; 2022 By Arifur Rahman Razon. All Rights Reserved
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
