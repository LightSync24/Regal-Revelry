import React, { useState } from "react";
import { magicalHeadings, magicalImage, magicalText } from "../../assets/data";

const Magical = () => {
  const [ind, setInd] = useState(0);

  return (
    <div className="magical-container">
      <div className="magical-image">
        <img src={magicalImage[ind]} alt="Magical" key={ind} />
      </div>
      <div className="magical-text">
        <h3 style={{ marginBottom: "50px" }}>
          Making Every Experience Magical
        </h3>
        <div className="magical-body">
          <div className="side-text">
            <p
              className={ind === 0 ? "selected" : ""}
              onClick={() => setInd(0)}
            >
              Weddings
            </p>
            <p
              className={ind === 1 ? "selected" : ""}
              onClick={() => setInd(1)}
            >
              Social
            </p>
            <p
              className={ind === 2 ? "selected" : ""}
              onClick={() => setInd(2)}
            >
              Corporate
            </p>
            <p
              className={ind === 3 ? "selected" : ""}
              onClick={() => setInd(3)}
            >
              Venues
            </p>
          </div>
          <div className="main-text">
            <h4>{magicalHeadings[ind]}</h4>
            <p>{magicalText[ind]}</p>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <button style={{ width: "30%", padding: "5px" }}>
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magical;
