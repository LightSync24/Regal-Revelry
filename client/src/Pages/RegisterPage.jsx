import React from "react";
import "../css/RegisterPage.css";
import { RegisterForm } from "../components/RegisterPage/index";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="registerPage">
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
          <RegisterForm />
          <p>
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              &nbsp;&nbsp;Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
