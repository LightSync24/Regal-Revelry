import React from "react";
import LandingPageHero from "../../assets/LandingPage/LandingPageHero.mp4";

const Hero = () => {
  return (
    <div className="videoBg">
      <video autoPlay muted loop playsInline style={{ zIndex: "-1" }}>
        <source src={LandingPageHero} />
      </video>
      <h2 style={{ marginTop: "-400px" }}>Simply the Finest</h2>
    </div>
  );
};

export default Hero;
