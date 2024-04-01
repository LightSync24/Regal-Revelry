import React from "react";
import newsletterLandingPage from '../../assets/LandingPage/newsletterLandingPage.png'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-left">
        <h2>Endless Inspiration</h2>
        <p style={{fontSize: '20px', width: '90%'}}>
          Sign up to our newsletter for fresh updates, encouragement, and
          exclusive insights.
        </p>
        <div className="newsletterInput">
          <input type="text" placeholder="Enter Your Email" />
          <button>SIGN UP</button>
        </div>
        <p>
          By clicking Sign Up you’re confirming that you agree with our Terms
          and Conditions.
        </p>
      </div>
      <div className="newsletter-right">
        <img src={newsletterLandingPage}></img>
      </div>
    </div>
  );
};

export default NewsLetter;
