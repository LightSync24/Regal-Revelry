import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const CreateForm = () => {
  return (
    <form className="createForm">
      <input type="text" placeholder="Name*"></input>
      <input type="email" placeholder="Email*"></input>
      <input type="number" placeholder="Phone Number*"></input>
      <select>
        <option disabled selected>
          Event Type
        </option>
        <option>Wedding</option>
        <option>Corporate</option>
        <option>Social</option>
        <option>Gallery</option>
      </select>
      <textarea placeholder="Locations You're interested in"></textarea>
      <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
        <input style={{flex: '1'}} type="text" placeholder="Date (optional)" />
        <input style={{flex: '1'}} type="text" placeholder="Approx Guest Count(optional)" />
      </div>
      <textarea placeholder="Message (tell us about your event)"></textarea>
      <button>Start Planning <IoMdArrowForward  style={{fontSize: '20px'}} /></button>
    </form>
  );
};

export default CreateForm;
