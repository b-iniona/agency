import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import './Login.css'
import { toast } from "react-toastify";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
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

    if (!inputs.password) {
      formIsValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post("https://www.server.com/api/auth/login", inputs);
        navigate("/")
        toast.success("Logged in successfully")
        // Handle successful login
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Unauthorized error (wrong password)
          alert('Invalid username or password');
          setErrors({ serverError: "Invalid username or password" });
        } else {
          // Other error occurred
          alert('An error occurred. Please try again later.');
          setErrors({ serverError: "An error occurred. Please try again later." });
        }
      }
    }
  };

  return (
    <div className="background">
      <div className="login container">
        <div className="formWrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="loginText">Login</h2>
            <label id="usernameText" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter username..."
              value={inputs.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}

            <label id="passwordText" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter password..."
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <button className="loginBtn submit" type="submit">
              Login
            </button>
            {errors.serverError && <span className="error">{errors.serverError}</span>}
          </form>
        </div>
      </div>

      <Link className="" to="/register">
        <button className=" mx-5 my-2 submit registerBtn">
          Register
        </button>
      </Link>
      <Link className=" " to="/ChangePassword">
        <button className=" mx-5 my-2 submit registerBtn">
          Change password
        </button>
      </Link>
    </div>
  );
};

export default Login;