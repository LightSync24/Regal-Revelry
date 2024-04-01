import React from "react";
import { Link } from "react-router-dom";
import { TbCalendarPlus } from "react-icons/tb";

const Header = () => {
  return (
    <div className="events-header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="events-left">
          <h4>REGAL REVELRY</h4>
          <p>catering & events</p>
        </div>
      </Link>
      <div className="events-username">
        <Link to="/create" style={{ textDecoration: "none" }}>
          <button>
            <TbCalendarPlus />
            &nbsp;Add Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
