import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { AuthContext } from "../../Context/authContext";
import logo from "../../Images/ewuqet.jpg";
import "./Header.css";

function Header() {
const { currentUser, logout } = useContext(AuthContext);

return (
    <div className="header fixed-top">
    <Navbar expand="lg" className="bottom-border navbar">
        <Container>
        <Link to="/" className="brand">
            <img className="logo" src={logo} alt="media agency consultancy" />
            Ewuqet
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div>
            <Nav className="navLinks distance me-auto">
                <div className="navBarLinks">
                <Link className="py-2 uppercase-link link" to="/"
                onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}>
                    Home
                </Link>
                <Link className="py-2 uppercase-link link" to="/services" 
                onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}>
                    Services
                </Link>
                <Link className="py-2 uppercase-link link" to="/contactus"
                onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}>
                    Contact Us
                </Link>
                <Link className="py-2 uppercase-link link" to="/aboutus"
                onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}>
                    About Us
                </Link>
                </div>
                {currentUser && (
                    <NavDropdown className="wr text-center" title="W&R" id="basic-nav-dropdown">
                    <Link className="writelink" to="/Write"
                    onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}>
                    Write
                    </Link>
                    <Link className="writelink" to="/read"
                    onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}>
                    Read
                    </Link>
                   
                    
                </NavDropdown>
                    
                    
                    
                )}

                <div className="social-media">
                <div className="px-2">
                    <Link
                    className="social_link"
                    to="http://facebook.com/ewuqetbet"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}
                    >
                    <i className="hover-link enlarged-icon fa-brands fa-square-facebook"></i>
                    </Link>
                </div>

                <div className="px-2">
                    <Link
                    className=" social_link"
                    to="https://t.me/ewuqetbet"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}
                    >
                    <i className="hover-link enlarged-icon fa-brands fa-telegram"></i>
                    </Link>
                </div>

                <div className="px-2">
                    <Link
                    className=" social_link"
                    to="https://youtube.com/@ewuqetbet?si=bvOfcuGFEvqjkQYA"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}
                    >
                    <i className="hover-link enlarged-icon fa-brands fa-square-youtube"></i>
                    </Link>
                </div>
                <div className="px-2">
                    <Link
                    className=" social_link"
                    to="https://www.tiktok.com/@ewuqetbet?_t=8jwdIFFIC9d&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}
                    >
                    <i className="hover-link enlarged-icon fa-brands fa-tiktok"></i>
                    </Link>
                </div>

                <div>
                    {currentUser ? (
                    <Link
                         
                        onClick={() => {
                            logout();
                            setTimeout(() => document.querySelector('.navbar-toggler').click(), 0);
                        }}
                        className="px-2 social_link"
                        to="/"
                        
                    >
                        <i className="hover-link enlarged-icon fa-solid fa-right-from-bracket"></i>
                    </Link>
                    ) : (
                    <Link className="px-2 social_link" to="/login"  
                     onClick={() =>setTimeout(() => document.querySelector('.navbar-toggler').click(), 0)}>
                        <i className="hover-link enlarged-icon fa-solid fa-right-to-bracket"></i>
                    </Link>
                    )}
                </div>
                </div>
            </Nav>
            </div>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
);
}

export default Header;
