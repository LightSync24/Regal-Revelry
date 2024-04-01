import React from "react";
import { events } from "../../assets/data";
import { MdOutlineAddComment } from "react-icons/md";
import Event from "./Event";

const Body = () => {
  return (
    <div className="events-body">
      <div className="options">
        <div>
          <label>Event Type: </label>
          <select>
            <option disabled selected value="">
              Select Event Type
            </option>
            <option>All</option>
            <option>Wedding</option>
            <option>Corporate</option>
            <option>Social</option>
            <option>Gallery</option>
          </select>
        </div>
        <div>
          <label>RSVP By: </label>
          <select>
            <option disabled selected value="">
              Select RSVP Deadline
            </option>
            <option>All</option>
            <option>Urgent &#40;1-2 Weeks&#41;</option>
            <option>Less than 1 Month</option>
            <option>Less than 2 Months</option>
            <option>Less than 3 Months</option>
          </select>
        </div>
      </div>
      <div>
        {events.map((it) => {
          return <Event />;
        })}
      </div>
    </div>
  );
};

export default Body;
