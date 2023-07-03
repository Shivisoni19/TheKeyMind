import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const PersonalInfo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [errors, setErrors] = useState({});
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordChange1 = (e) => {
    setPassword1(e.target.value);
  };

  const handleText1Change = (e) => {
    setFirstName(e.target.value);
  };

  const handleText2Change = (e) => {
    setLastName(e.target.value);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Perform login logic here
      console.log(`Email: ${email}, Password: ${password}`);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  return (
    <>
      <div className="sign-up-head">
        <h1>Your Personal Information</h1>
      </div>
      <div className="login-form-container">
        <div className="login-form">
          {/* <h2>Login</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="email">First Name:</label>
              <input
                type="text"
                id="text"
                value={firstname}
                onChange={handleText1Change}
                required
              />
              {errors.text && <p className="error">{errors.text}</p>}
            </div>
            <div className="form-row">
              <label htmlFor="email">Last Name:</label>
              <input
                type="text"
                id="text"
                value={lastname}
                onChange={handleText2Change}
                required
              />
              {errors.text && <p className="error">{errors.text}</p>}
            </div>
            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-row">
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-row">
              <label htmlFor="password1">New Password:</label>
              <input
                type={showPassword1 ? "text" : "password"}
                id="password1"
                value={password1}
                onChange={handlePasswordChange1}
                required
              />
              <button type="button" onClick={toggleShowPassword1}>
                {showPassword1 ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
              {errors.password1 && <p className="error">{errors.password1}</p>}
            </div>
            <div className="form-row btn-center">
              <button type="submit">Update</button>
            </div>
            {/* <SignupFooter /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
