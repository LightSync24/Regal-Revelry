import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p>About</p>
        </Link>
        <p>Services</p>
        <Link to="/events" style={{ textDecoration: "none" }}>
          <p>Events</p>
        </Link>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="center">
          <div style={{ margin: "auto" }}>
            <span className="upper">Regal Revelry</span>
          </div>
          <span className="lower">Catering & Events</span>
        </div>
      </Link>
      <div className="right">
        <p>Venues</p>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <p>Contact Us</p>
        </Link>
        <Link to="/login">
          <button>Get In Touch</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
