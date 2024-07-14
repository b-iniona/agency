import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Register.css';
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!inputs.username) {
      formIsValid = false;
      errors.username = "Username is required";
    }

    if (!inputs.email) {
      formIsValid = false;
      errors.email = "Email is required";
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputs.email)) {
        formIsValid = false;
        errors.email = "Invalid email format";
      }
    }

    if (!inputs.password) {
      formIsValid = false;
      errors.password = "Password is required";
    } else if (inputs.password.length < 6) {
      formIsValid = false;
      errors.password = "Password should be at least 6 characters";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post("https://www.server.com/api/auth/register", inputs);
        toast.success("Registered Successfully");
        navigate("/login");
      } catch (error) {
        if (error.response && error.response.status === 403) {
          // Unauthorized 
          alert("User registration is currently closed");
        } else {
          // Other error occurred
          alert('An error occurred. Please login and try again');
        }
        setErrors(error.response.data);
      }
    }
  };
 
  return (
    <div className="background">
      <div className="login container">
        <div className="formWrapper">
          <h2 className="loginText">Register</h2>
          {errors.message && <span className="error">{errors.message}</span>}
          <form className="form">
            <label id="usernameText" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter username..."
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}

            <label id="emailText" htmlFor="email">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter e-mail..."
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label id="passwordText" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter password..."
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <button onClick={handleSubmit} className="submit" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <Link className="" to="/login">
        <button className="submit">Login</button>
      </Link>
    </div>
  );
}

export default Register;
