import React, { useState } from "react";
import Header from "../Header";
import Subjects from "../Subjects";
import "./index.css";
import StepsProcess from "../StepsProcess";

function Home() {
  const [getStartedToggle, setStartedToggle] = useState(false);
  const [loginToggle, setLoginToggle] = useState(false);
  const [signUpErrors, setSignUpErrors] = useState({});
  const loginBtnHandler = () => {
    setLoginToggle(true);
  };

  const closeLoginBtnHandler = () => {
    setLoginToggle(false);
  };
  const btnHandler = () => {
    setStartedToggle(true);
  };

  const closeHandler = () => {
    setStartedToggle(false);
    setSignUpErrors({});
    setSignUpForm({
      name: "",
      email: "",
      password: "",
    });
  };

  const [signUpFormValues, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    setSignUpErrors(validate(signUpFormValues));
    console.log(signUpErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "*Name is required!";
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "*Enter a valid email format!";
    }
    if (!values.password) {
      errors.password = "*Password is required!";
    } else if (values.password.length <= 4) {
      errors.password = "*Password must contain 5 characters!";
    }
    return errors;
  };

  return (
    <>
      <Header btnHandler={btnHandler} loginBtnHandler={loginBtnHandler} />
      <div className="home-container">
        <div className="desktop-view-landing-page">
          <div className="desktop-view-landing-left">
            <h1 className="desktop-view-main-quote">Find Your Master</h1>
            <p className="desktop-view-main-content-1">Clear your query!</p>
            <p className="desktop-view-main-content-1">
              Online or Face to Face
            </p>
            <p className="desktop-view-main-content-1">
              Choose your Master at your Pace
            </p>
            <div>
              <button className="desktop-view-home-btn" onClick={btnHandler}>
                Get started
              </button>
            </div>
          </div>
          <div className="desktop-view-landing-right">
            <img
              src="https://master-web-application.s3.ap-south-1.amazonaws.com/home-img-1.png"
              alt="home-img"
              className="desktop-view-home-img"
            />
          </div>
        </div>
        <Subjects />
        <StepsProcess />
        <div className="saraswati-img-view">
          <img
            src="https://master-web-application.s3.ap-south-1.amazonaws.com/saraswati-book.png"
            className="saraswati-img"
            alt="saraswati-book-img"
          />
          <h1 className="saraswati-text">Knowledge is divine</h1>
        </div>
        {getStartedToggle && (
          <div className="pop-up-container">
            <div className="pop-up-body">
              <div className="pop-up-header">
                <button className="close-btn" onClick={closeHandler}>
                  X
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="sign-up-details-box">
                  <h1 className="sign-up-heading">Sign-up</h1>
                  <div className="input-box-card">
                    <label className="sign-up-label" htmlFor="name">
                      Name
                    </label>
                    <div className="name-card">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="user-img"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                      <input
                        className="name-input-field"
                        placeholder="Name"
                        id="name"
                        name="name"
                        type="text"
                        value={signUpFormValues.name}
                        onChange={handleChange}
                      />
                    </div>
                    <h1 className="error-text">{signUpErrors.name}</h1>
                  </div>
                  <div className="input-box-card">
                    <label className="sign-up-label" htmlFor="email">
                      Email
                    </label>
                    <div className="name-card">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="user-img"
                      >
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                      </svg>
                      <input
                        className="name-input-field"
                        placeholder="Email"
                        type="text"
                        id="email"
                        name="email"
                        value={signUpFormValues.email}
                        onChange={handleChange}
                      />
                    </div>
                    <h1 className="error-text">{signUpErrors.email}</h1>
                  </div>
                  <div className="input-box-card">
                    <label className="sign-up-label" htmlFor="password">
                      Password
                    </label>
                    <div className="name-card">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="user-img"
                      >
                        <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                      </svg>
                      <input
                        className="name-input-field"
                        placeholder="Password"
                        id="password"
                        type="password"
                        name="password"
                        value={signUpFormValues.password}
                        onChange={handleChange}
                      />
                    </div>
                    <h1 className="error-text">{signUpErrors.password}</h1>
                  </div>
                  <div className="btn-card">
                    <button className="register-btn">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        {loginToggle && (
          <div className="pop-up-container">
            <div className="pop-up-body">
              <div className="pop-up-header">
                <button className="close-btn" onClick={closeLoginBtnHandler}>
                  X
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="login-details-box">
                  <h1 className="login-heading">Login</h1>
                  <label className="login-label" htmlFor="email">
                    Email
                  </label>
                  <div className="login-name-card">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="user-img"
                    >
                      <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                    <input
                      className="name-input-field"
                      placeholder="Email"
                      type="text"
                      id="email"
                      name="email"
                      value={signUpFormValues.email}
                      onChange={handleChange}
                    />
                  </div>
                  <label className="login-label" htmlFor="password">
                    Password
                  </label>
                  <div className="login-name-card">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="user-img"
                    >
                      <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                    </svg>
                    <input
                      className="name-input-field"
                      placeholder="Password"
                      id="password"
                      type="password"
                      name="password"
                      value={signUpFormValues.password}
                      onChange={handleChange}
                    />
                  </div>
                  <h1 className="forgot-password">Forgot password ?</h1>
                  <div className="btn-card">
                    <button className="login-btn">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
