import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../components/Password";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [matchingPassword, setMatchingPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showMatchingPassword, setShowMatchingPassword] = useState(false);

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
    if (!regex.test(newPassword)) {
      toast.error(
        "Password should have 1 UpperCase, 1 Numerical and 1 special character and min length of 8",
        { toastId: "passwordError", autoClose: 2000 }
      );
    } else {
      toast.dismiss("passwordError");
      toast.success("Password criteria met", {
        toastId: "passwordSuccess",
        autoClose: 2000,
      });
    }
  };

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleMatchingPasswordVisibility = (e) => {
    e.preventDefault();
    setShowMatchingPassword(!showMatchingPassword);
  };
  const matchingPasswordHandler = (e) => {
    e.preventDefault();
    setMatchingPassword(e.target.value);
    if (
      password &&
      password === e.target.value &&
      password.length === e.target.value.length
    ) {
      toast.dismiss("matchError");
      toast.success("Passwords Match", {
        toastId: "matchSuccess",
        autoClose: 2000,
      });
    } else {
      toast.error("Passwords are not matching", {
        toastId: "matchError",
        autoClose: false,
      });
    }
  };

  const handlePhoneChange = (e) => {
    const updatedPhone = e.target.value.replace(/\D/g, "");
    setPhone(updatedPhone);
  };
  return (
    <div className="signup">
      <header>
        <h1>Create New Account</h1>
      </header>
      <div className="form-signup-div">
        <form className="form" id="signin">
          <div className="name">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              value={name}
              required
              id="name"
              title="Please fill out your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="username">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              required
              onChange={usernameHandler}
              value={username}
              id="username"
              title="Please fill out Username"
            />
          </div>
          <div className="email">
            <label htmlFor="email">EMAIL</label>
            <input
              type="mail"
              required
              id="email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please fill out your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="phone ">
            <label htmlFor="phone">Phone No.</label>

            <div className="phone-div">
              <div>
                <select
                  id="countryCode"
                  name="countryCode"
                  required
                  title="Please fill out your country code"

                  // value={countryCode}
                  // onChange={handleCountryCodeChange}
                >
                  <option value="+1">USA +1 </option>
                  <option value="+44">UK +44</option>
                  <option value="+91">IN +91</option>
                  <option value="+61">AU +61</option>
                  <option value="+81">JP +81 </option>
                </select>
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  title="Please fill out your mobile number"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                />
              </div>
            </div>
          </div>

          <div className="pwd1">
            <label htmlFor="password">SET PASSWORD</label>
            <Password
              password={password}
              showPassword={showPassword}
              handleInput={passwordHandler}
              handlePasswordVisibility={handlePasswordVisibility}
            />{" "}
          </div>
          <div className="pwd2">
            <label htmlFor="password">CONFIRM NEW PASSWORD</label>
            <Password
              password={matchingPassword}
              showPassword={showMatchingPassword}
              handleInput={matchingPasswordHandler}
              handlePasswordVisibility={handleMatchingPasswordVisibility}
            />{" "}
          </div>
        </form>
      </div>
      <div className="signup-btn">
        <button type="submit" form="signin">
          SIGN UP
        </button>
      </div>
      <div className="change-btn">
        Already have an Account?
        <Link to="/" className="link">
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Signup;
