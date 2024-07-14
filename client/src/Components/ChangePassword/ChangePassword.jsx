import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import '../Login/Login.css';

const ChangePassword = () => {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "currentPassword") {
      setCurrentPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!username) {
      formIsValid = false;
      errors.username = "Username is required";
    }

    if (!currentPassword) {
      formIsValid = false;
      errors.currentPassword = "Current password is required";
    }

    if (!newPassword) {
      formIsValid = false;
      errors.newPassword = "New password is required";
    }

    if (!confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = "Confirm password is required";
    } else if (newPassword !== confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post("https://www.server.com/api/change-password", {
          username,
          currentPassword,
          newPassword,
        });
        navigate("/");
        alert("Password changed successfully");
        toast.success("Password changed successfully");
        setSuccessMessage("Password changed successfully");
        setUsername("");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 404) {
          // Unauthorized 
          alert('User not found');
        } else {
          // Other error occurred
          toast.error('Error. Please make sure you entered the correct password and username.');
          setErrors({ serverError: "Error. Please make sure you entered the correct password and username" });
        }
      }
    }
  };

  return (
    <div className="background">
      <div className="login container">
        <div className="formWrapper">
          {successMessage && <p>{successMessage}</p>}
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="loginText">Change Password</h2>
            {errors.serverError && <p className="error">{errors.serverError} try again</p>}
            <div>
              <label id="usernameText" htmlFor="username">
                Username:
              </label>
              <input type="text" name="username" value={username} onChange={handleChange} />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
              <label>Current Password:</label>
              <input type="password" name="currentPassword" value={currentPassword} onChange={handleChange} />
              {errors.currentPassword && <p className="error">{errors.currentPassword}</p>}
            </div>
            <div>
              <label>New Password:</label>
              <input type="password" name="newPassword" value={newPassword} onChange={handleChange} />
              {errors.newPassword && <p className="error">{errors.newPassword}</p>}
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <button className="loginBtn submit" type="submit">
              Change Password
            </button>
            {errors.message && <span className="error">{errors.message}</span>}
          </form>
        </div>
      </div>
      <Link className="" to="/login">
        <button className="my-2 submit registerBtn">
          Go to Login
        </button>
      </Link>
    </div>
  );
};

export default ChangePassword;
