import React, { useState } from "react";
import { welcome } from "../../assets/data";

const Welcome = () => {
  const [ind, setInd] = useState(0);
  return (
    <div className="welcome">
      <div className="text">
        <h3>Welcome to Regal Revelry</h3>
        <h1>Remarkable Catering & Events</h1>
        <p>
          Regal Revelry is the premier catering and events company of choice in
          Southern California. We create remarkable experiences by offering the
          finest quality foods and providing unsurpassed personalized service,
          driven by our passion for life’s special occasions.
        </p>
        <button>Get In Touch</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="img-welcome">
          <img src={welcome[ind]} key={ind}></img>
        </div>
        <div className="btn-container">
          <button
            className={`btn ${ind === 0 ? "active" : ""}`}
            onClick={() => setInd(0)}
          ></button>
          <button
            className={`btn ${ind === 1 ? "active" : ""}`}
            onClick={() => setInd(1)}
          ></button>
          <button
            className={`btn ${ind === 2 ? "active" : ""}`}
            onClick={() => setInd(2)}
          ></button>
          <button
            className={`btn ${ind === 3 ? "active" : ""}`}
            onClick={() => setInd(3)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
