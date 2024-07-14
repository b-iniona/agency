import React from 'react';
import consultancy from '../../Images/contact.jpg';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import "../ServiceAndProduct/ServiceAndProduct.css";
import "../Footer/Footer.css";


function ContactUs() {
    return (
        <div className='service text-center'>
        

            <div className='serviceWrapper'>
                <h1 className='serviceTitle my-5'>Contact Us</h1>
                
                <div className='reverse d-flex col-12 all my-5'>
        <div className='image col-lg-6 col-sm-12'>
            <img src={consultancy} alt='Social Media Management Social media manager creating engaging content' />
        </div>
        <div className='content col-lg-6 col-sm-12 bordercustom'>
            <h3 className='reverseContent text-center my-3'>Unlock the potential of your online business</h3>
            <p className='reverseContent mx-2 mb-5'>
            Get personalized advice from our industry professionals on specific challenges you're facing.
            </p>
            <h1>We are available on social media</h1>
                            <div className="text-center mb-3">
                                <div className="text-center">
                                    <div className="socialMedia d-inline">
                                        <div className="socialMediaWrapperr text-center d-flex">
                                            <div className="px-2 ">
                                                <Link className="social_link" to="http://facebook.com/ewuqetbet" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon hover-link enlarged-icon fa-brands fa-square-facebook"></i>
                                                </Link>
                                            </div>
                                            <div className="px-2">
                                                <Link className=" social_link" to="https://t.me/ewuqtbet" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon hover-link enlarged-icon fa-brands fa-telegram"></i>
                                                </Link>
                                            </div>
                                            <div className="px-2">
                                                <Link className=" social_link" to="https://youtube.com/@ewuqetbet?si=bvOfcuGFEvqjkQYA" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon hover-link enlarged-icon fa-brands fa-square-youtube"></i>
                                                </Link>
                                            </div>
                                            <div className="px-2">
                                                <Link className=" social_link" to="https://www.tiktok.com/@ewuqetbet?_t=8jwdIFFIC9d&_r=1" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon hover-link enlarged-icon fa-brands fa-tiktok"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                            <h1>Call us now</h1>
                            <ul className="list-unstyled text-dark footer-link-list">
                                <li className='my-2'>
                                    <i className="text-success fa fa-phone fa-fw"></i>
                                    <a className="text-dark text-decoration-none" href="tel:+251937712019">+251937712019</a>
                                </li>
                                <li className='my-2'>
                                    <i className="text-success fa fa-phone fa-fw"></i>
                                    <a className="text-dark text-decoration-none" href="tel:+251929334166">+251929334166</a>
                                </li>
                                <li className='my-2'>
                                    <i className="text-success fa fa-phone fa-fw"></i>
                                    <a className="text-dark text-decoration-none" href="tel:+251955416658">+251955416658</a>
                                </li>
                                <h1>E-mail us now</h1>
                                <li>
                                    <i className="text-success fa fa-envelope fa-fw"></i>
                                    <a className="text-dark text-decoration-none" href="mailto:ewuqetbet@gmail.com">ewuqetbet@gmail.com</a>
                                </li>
                            </ul>
                            </div>
                            
        </div>
    </div>
</div>
</div>
    );
}
export default ContactUs;
