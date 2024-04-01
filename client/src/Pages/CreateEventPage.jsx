import React from "react";
import CreatePageArrow from "../assets/CreatePage/CreatePageArrow.gif";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { CreateForm } from "../components/CreateEventPage/index";
import "../css/CreateEventPage.css";
import { Link } from "react-router-dom";

const CreateEventPage = () => {
  return (
    <div className="createPage">
      <div className="createText">
        <Link  style={{fontSize: '30px', color: '#fff'}} to='/events'><IoArrowBackCircleOutline /></Link>
        <h2>Start Planning With Us</h2>
        <p>
          Need help deciding? We can talk you through it. Let us know how we can
          help by filling out this short form and one of our incredible team
          members we get back to you soon.
        </p>
        <img src={CreatePageArrow}></img>
        <h3>You can also find us here</h3>
        <div className="createTextBottom">
          <p>9999999999</p>
          <p>9898989898</p>
          <p>info@regalRevelry.com</p>
        </div>
      </div>
      <div className="createForm">
        <CreateForm />
      </div>
    </div>
  );
};

export default CreateEventPage;
