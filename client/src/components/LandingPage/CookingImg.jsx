import React from "react";

const CookingImg = ({ cImg, cHeader, cText }) => {
  return (
    <div className="cookImg">
      <img src={cImg} alt="img" />
      <h3>{cHeader}</h3>
      <p>{cText}</p>
    </div>
  );
};

export default CookingImg;
