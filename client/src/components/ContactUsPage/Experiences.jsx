import React from "react";
import ContactPageArrow from "../../assets/ContactPage/ContactPageArrow.gif";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className="exp-container">
      <div className="experiences">
        <img src={ContactPageArrow}></img>
        <div className="exp-text">
          <h2>Experiences Designed To Be Shared</h2>
          <p>Follow us for more from Regal Revelry.</p>
          <div className="logos">
            <FiInstagram />
            <FaFacebook />
            <FaPinterest />
          </div>
        </div>
      </div>
      <div className="info-container">
        <h1>Reach Us Here</h1>
        <h2>Email</h2>
        <p style={{marginBottom: '15px'}}>info@regalRevelry.com</p>
        <h2>contact Numbers</h2>
        <p>9999999999</p>
        <p style={{marginBottom: '15px'}}>9898989898</p>
        <h2>Our Head Office</h2>
        <p style={{marginBottom: '15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </div>
  );
};

export default Experiences;
