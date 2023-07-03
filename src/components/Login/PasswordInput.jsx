import React, { useState } from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="col-75">
      <div className="password-container">
        <input type={showPassword ? "text" : "password"} id="myInput" />
        <button
          id="show-password-btn"
          type="button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
