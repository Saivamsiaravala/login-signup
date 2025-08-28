import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../components/Password";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const formHandler = (e) => {
    if (username && password) {
      alert(`${username} is logged in`);
    } else {
      alert("please enter details");
    }
    e.preventDefault();
  };

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const usernameHandler = (e) => {
    e.preventDefault();
    const newUserName = e.target.value.replace(/\s/g, "");
    setUsername(newUserName);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    const newPassword = e.target.value.replace(/\s/g, "");
    console.log(newPassword);
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    setPassword(newPassword);
    if (newPassword && regex.test(newPassword)) {
      setError(
        "Password should contain 1 Uppercase letter, 1 Numerical value, 1 Special character and a minimum length of 8"
      );
    } else {
      setError("");
    }
  };

  return (
    <div className="login">
      <header>
        <h1>Login</h1>
        <h4>Login to Continue</h4>
      </header>
      <div className="form-div">
        <form className="form" onSubmit={formHandler}>
          <div className="username">
            <label htmlFor="username">USERNAME</label>
            <input type="text" onChange={usernameHandler} value={username} />
          </div>
          <div className="password">
            <label htmlFor="password">PASSWORD</label>
            <Password
              password={password}
              showPassword={showPassword}
              handleInput={passwordHandler}
              handlePasswordVisibility={handlePasswordVisibility}
            />
          </div>

          <div className="login-btn">
            <button type="submit">LOGIN</button>
          </div>
          <div className="change-btn">
            Don't have an Account? <Link to="signup">SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
