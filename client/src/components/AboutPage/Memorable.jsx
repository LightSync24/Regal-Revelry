import React from "react";
import { aboutPageImages } from "../../assets/data";

const Memorable = () => {
  return (
    <div className="memorable">
      <h4 style={{ marginTop: "-50px" }}>About</h4>
      <h2>Making moments memorable</h2>
      <p style={{ marginBottom: "40px" }}>
        We are a full-service catering and events company serving. We help
        create extraordinary weddings, social gatherings, and corporate events
        by placing a strong emphasis on personalized customer service. Our
        approach is simple: We hold ourselves to exceptionally high standards
        because you deserve simply the finest.
      </p>
      <div className="memorable-images">
        <img src={aboutPageImages[0]}></img>
        <img src={aboutPageImages[1]}></img>
        <img src={aboutPageImages[2]}></img>
      </div>
      <h4 style={{ marginRight: "505px" }}>Our vision</h4>
      <h2>To create & inspire</h2>
      <p>
        We create more than just delicious cuisine and exceptional pairings.
        We’re passionate about creating experiences and leaving lasting memories
        for our guests. Our inspiration is an ongoing dialogue; we persistently
        seek it and strive to inspire others through our commitment to
        excellence and unwavering passion.
      </p>
    </div>
  );
};

export default Memorable;
