import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import arrowGif from "../assets/CreatePage/CreatePageArrow.gif";

const CreateEvent = () => {
  return (
    <section
      id="add-event-form"
      className="flex flex-col lg:flex-row justify-evenly items-center max-h-full h-screen p-5 lg:p-0"
    >
      <div
        id="side-text"
        className="flex flex-col w-full lg:w-[30%] text-center lg:text-left"
      >
        <Link to="/availableEvents">
          <FaRegArrowAltCircleLeft className="text-leaf text-xl mb-20" />
        </Link>

        <h1 className="font-headerFont text-5xl text-leaf">
          Give Us The Juicy Deets!
        </h1>
        <p className="font-sans mt-5 text-gray-600 text-xl">
          The beginning of your perfect event is having the best possible
          understanding of your vision. Let us know, in as much detail as you
          can, what you’re dreaming of and we’ll get the party started!
        </p>
        <p className="font-sans mt-5 text-leaf opacity-70 font-semibold text-xl uppercase">
          You can also find us here
        </p>
        <div className="flex justify-between items-center max-lg:justify-center">
          <div>
            <p className="font-sans mt-5 text-gray-600 text-xl">XXXXX XXXXX</p>
            <p className="font-sans text-gray-600 text-xl">XXXXX XXXXX</p>
          </div>
          <img src={arrowGif} alt="gif" className="hidden lg:block h-[80px]"/>
        </div>
      </div>

      <form
        action=""
        className="flex flex-col w-full lg:w-1/2 items-start gap-5"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name*"
          className="bg-leaf/10 w-full text-xl p-3 rounded-lg text-leaf placeholder-leaf"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address*"
          className="bg-leaf/10 w-full text-xl p-3 rounded-lg text-leaf placeholder-leaf"
        />
        <textarea
          type="text"
          name="locations"
          id="locations"
          placeholder="Locations You're Interested In"
          className="bg-leaf/10 w-full text-xl p-3 rounded-lg text-leaf placeholder-leaf h-[140px] resize-none"
        />
        <div className="flex justify-between items-center gap-12 w-full">
          <input
            type="text"
            name="date"
            id="date"
            placeholder="Date (optional)"
            className="bg-leaf/10 w-full text-lg p-3 rounded-lg text-leaf placeholder-leaf"
          />
          <input
            type="text"
            name="guestCount"
            id="guestCount"
            placeholder="Approx Guest Count (optional)"
            className="bg-leaf/10 w-full text-lg p-3 rounded-lg text-leaf placeholder-leaf"
          />
        </div>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Message (tell us about your event)"
          className="bg-leaf/10 w-full text-xl p-3 rounded-lg text-leaf placeholder-leaf h-[140px] resize-none"
        />
      </form>
    </section>
  );
};

export default CreateEvent;
