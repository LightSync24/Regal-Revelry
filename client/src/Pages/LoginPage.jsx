import React from "react";
import { LoginForm } from "../components/LoginPage/index";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../css/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="overlay">
        <div className="form">
          <Link to="/">
            <IoArrowBackCircleOutline
              style={{
                fontSize: "2rem",
                color: "rgb(26, 65, 34)",
                marginTop: "3px",
                marginLeft: "3px",
              }}
            ></IoArrowBackCircleOutline>
          </Link>
          <LoginForm />
          <p>
            Don't have an account?
            <Link to="/register" style={{ textDecoration: "none" }}>
              &nbsp;&nbsp;Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
