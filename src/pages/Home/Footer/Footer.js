import React from 'react';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.css'
const Footer = () => {
    return (
        <div>
<footer class="footer-distributed">

    <div class="footer-left">

        <h3>G.<span>Chairs</span></h3>

        <p class="footer-links">
            <Link to="/home" className='me-3'> Home  </Link>
            <Link to="/login" className='me-3'> Login </Link>
            <Link to="/register" className='me-3'> Register </Link>
            <Link to="/products" className='me-3'> Products </Link>

        </p>

        <p class="footer-company-name">G.Chair &copy; 2021</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>House 428(1st Floor), Road 30,
Mohakhali DOHS,</span>  Dhaka, Bangladesh</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+88-01744-941494</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">info@chairs.net</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About the company</span>
            G.Chairs is the frist authorized Gaming Chair dealer in The World. We supply our chairs all over the world within 15 days. We Provide the lowest possible price and maintain the best quality service.
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>
                <div className="copyright mt-3 text-center text-light">
                <small>&copy; 2021 By Arifur Rahman Razon</small>
            </div>

</footer>

        </div>
    );
};

export default Footer;