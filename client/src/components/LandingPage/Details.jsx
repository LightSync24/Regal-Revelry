import React from "react";
import Home_Services_GIF_R3 from '../../assets/LandingPage/Home_Services_GIF_R3.gif'
import DetailsSubText from "./DetailsSubText";
import { sideTextHeadings, sideTextPara } from "../../assets/data";

const Details = () => {
  return (
    <div className="details">
      <div className="details-text-side">
        <DetailsSubText heading={sideTextHeadings[0]} para={sideTextPara[0]} />
        <DetailsSubText heading={sideTextHeadings[1]} para={sideTextPara[1]} />
      </div>
      <img src={Home_Services_GIF_R3}></img>
      <div className="details-text-side">
        <DetailsSubText heading={sideTextHeadings[2]} para={sideTextPara[2]} />
        <DetailsSubText heading={sideTextHeadings[3]} para={sideTextPara[3]} />
      </div>
    </div>
  );
};

export default Details;
