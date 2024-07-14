    import React from "react";
    import { Link } from "react-router-dom";
    import "./Footer.css";

    function Footer() {
    return (
        <footer className="footer text-dark " id="tempaltemo_footer">
        <div className="container">
            <div className="row">
           

            <div className="col-md-4 col-sm-3 pt-5 ">
                <h2 className="h2 text-light border-bottom pb-3 border-light logo">
                EwuqetBet<br/>
                </h2>
                <ul className="list-unstyled text-dark footer-link-list">
                <li>
                    <i className="text-success fas fa-map-marker-alt fa-fw"></i>
                    <span className="text-light">Available everywhere</span>
                </li>
                <li>
                    <i className="text-success fa fa-phone fa-fw"></i>
                    <a className="text-light text-decoration-none" href="tel:+251937712019">+251937712019</a>
                </li>
                <li>
                    <i className="text-success fa fa-phone fa-fw"></i>
                    <a className="text-light text-decoration-none" href="tel:+251929334166">+251929334166</a>
                </li>
                <li>
                    <i className="text-success fa fa-phone fa-fw"></i>
                    <a className="text-light text-decoration-none" href="tel:+251955416658">+251955416658</a>
                </li>
                <li>
                    <i className="text-success fa fa-envelope fa-fw"></i>
                    <a className="text-light text-decoration-none" href="mailto:ewuqetbet@gmail.com">ewuqetbet@gmail.com</a>
                </li>
                </ul>
            </div>

            <div className="col-md-4 col-sm-3 pt-5">
                <h2 className="h3 text-success border-bottom pb-3 border-light">Product and Service</h2>
                <ul className="list-unstyled footer-link-list">
                <li><a className="text-white text-decoration-none" href="/services">Consultations</a></li>
                <li><a className="text-white text-decoration-none" href="/services">Content Creation</a></li>
                <li><a className="text-white text-decoration-none" href="/services">Digital Marketing</a></li>
                <li><a className="text-white text-decoration-none" href="/services">Additional Offerings</a></li>
                <li><a className="text-white text-decoration-none" href="/services">Mentorship Programs</a></li>
                <li><a className="footer-link-lista text-white text-decoration-none" href="/services">Social Media Management</a></li>
                </ul>
            </div>

            <div className="col-md-4 pt-5 ">
                <h2 className="h3 text-success border-bottom pb-3 border-light">Further Info</h2>
                <ul className="list-unstyled footer-link-list ">
                <li><a className="text-white text-decoration-none" href="/">Home</a></li>
                <li><a className="text-white text-decoration-none" href="/services">Services</a></li>
                <li><a className="text-white text-decoration-none" href="/contactus">Contact Us</a></li>
                <li><a className="text-white text-decoration-none" href="/aboutus">About Us</a></li>
                </ul>
            </div>
            </div>

            <div className="text-light mb-4">
            <div className="col-12 d-flex mb-3">
                <div className="col-auto me-auto">
                <div className="socialMedia d-inline">
                    <div className="py-2 px-2 text-light">Follow Us</div>
                    <div className="socialMediaWrapper d-flex">
                    <div className="px-2">
                        <Link className="social_link" to="http://facebook.com/ewuqetbet" target="_blank" rel="noopener noreferrer">
                        <i className="hover-link enlarged-icon fa-brands fa-square-facebook"></i>
                        </Link>
                    </div>
                    <div className="px-2">
                        <Link className=" social_link" to="https://t.me/ewuqtbet" target="_blank" rel="noopener noreferrer">
                        <i className="hover-link enlarged-icon fa-brands fa-telegram"></i>
                        </Link>
                    </div>
                    <div className="px-2">
                        <Link className=" social_link" to="https://youtube.com/@ewuqetbet?si=bvOfcuGFEvqjkQYA" target="_blank" rel="noopener noreferrer">
                        <i className="hover-link enlarged-icon fa-brands fa-square-youtube"></i>
                        </Link>
                    </div>
                    <div className="px-2">
                        <Link className=" social_link" to="https://www.tiktok.com/@ewuqetbet?_t=8jwdIFFIC9d&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="hover-link enlarged-icon fa-brands fa-tiktok"></i>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="w-100 footer boarder-top boarder-primary bg-light">
            <div className="container">
            <div className="row copyWrapper">
                <div className="col-12">
                <p className="copy text-center">
                    Copyright &copy; EwqetBet 2024
                    <br/>
                    <Link className="copy developer text-center text-decoration-none text-dark" to="https://biniamzerihun.netlify.app/" target="_blank">Click here, To contact the developer.</Link>
                </p>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
    }

    export default Footer;
