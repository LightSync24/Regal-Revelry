import React from "react";
import availEvents from "../assets/EventsPage/available-events.jpg";
import { availableEvents } from "../assets/data";
import { Link } from "react-router-dom";

const DisplayEvents = ({ event }) => {
  return (
    <div
      id="display-events"
      className="bg-leaf/10 flex flex-col justify-between items-center rounded-lg px-7 py-3"
    >
      <h1 className="uppercase opacity-80 font-headerFont  text-leaf text-xl">
        Event Details
      </h1>
      <div className="bg-lime-700 shadow-lg shadow-lime-800 h-[1.5px] w-full rounded-full mt-2 mb-2"></div>
      <h1 className="font-headerFont text-leaf text-3xl mt-2 w-2/3 text-center">
        {event.organizerName}
      </h1>
      <div
        id="email"
        className="flex flex-col justify-evenly items-center w-full mt-5"
      >
        <h2 className="uppercase font-headerFont text-leaf text-xl">
          Organizer Email
        </h2>
        <h2 className="opacity-90 font-headerFont text-leaf text-lg">
          {event.organizerEmail}
        </h2>
      </div>
      <div
        id="type"
        className="flex flex-col justify-evenly items-center w-full mt-5"
      >
        <h2 className="uppercase font-headerFont text-leaf text-center text-xl">
          Event Type
        </h2>
        <h2 className="opacity-90 font-headerFont text-leaf text-lg">
          {event.eventType}
        </h2>
      </div>
      <div
        id="type"
        className="flex flex-col justify-evenly items-center w-full mt-5"
      >
        <h2 className="uppercase font-headerFont text-leaf text-center text-xl">
          Interested Locations
        </h2>
        <h2 className="opacity-90 font-headerFont text-leaf text-lg">
          {event.interestedLocations.length === 0
            ? "None"
            : event.interestedLocations}
        </h2>
      </div>
      <div
        id="type"
        className="flex flex-col justify-evenly items-center w-full mt-5"
      >
        <h2 className="uppercase font-headerFont text-leaf text-center text-xl">
          Date
        </h2>
        <h2 className="opacity-90 font-headerFont text-leaf text-lg">
          {event.date}
        </h2>
      </div>
      <div
        id="type"
        className="flex flex-col justify-evenly items-center w-full mt-5"
      >
        <h2 className="uppercase font-headerFont text-leaf text-center text-xl">
          Guest Count
        </h2>
        <h2 className="opacity-90 font-headerFont text-leaf text-lg">
          {event.guestCount}
        </h2>
      </div>
    </div>
  );
};

const AvailableEvents = () => {
  return (
    <section
      className="flex flex-col justify-center items-center"
      id="availableEvents"
    >
      <div id="available-events-hero" className="flex flex-col">
        <img
          src={availEvents}
          className="object-cover w-full h-auto"
          alt="Venues Background"
        />
        <div className="flex flex-col justify-center items-center -mt-10">
          <p className="uppercase tracking-wider font-semibold font-serif text-leaf text-xl text-center bg-white h-[60px] w-[200px] rounded-full">
            <span className="opacity-70">Available Events</span>
          </p>
          <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl max-sm:text-2xl mt-2 w-2/3 text-center">
            Your Next Experience Awaits
          </h1>
          <p className="font-sans mt-5 text-gray-600 text-xl text-center w-[60%]">
            There's a reason why these events are the talk of the town. Each one
            is curated to offer you an unforgettable experience, blending
            excitement, elegance, and entertainment. Whether you're looking for
            something intimate and refined or bold and lively. Let us help in
            creating a memory!
          </p>
        </div>
      </div>

      <Link
        to={"/createEvent"}
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-sm md:text-base lg:text-lg text-hazel/95 transition duration-300 ease-out border-2 border-hazel/95 rounded-full shadow-md group w-[17%] mx-auto mt-5 h-11 capitalize"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-hazel/95 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-hazel/95 transition-all duration-300 transform group-hover:translate-x-full ease">
          Add Event
        </span>
        <span className="relative invisible">Add Event</span>
      </Link>

      <div
        id="displaying-events"
        className="flex flex-wrap items-center justify-evenly w-full gap-10 mt-20 p-5"
      >
        {availableEvents.map((item) => {
          return <DisplayEvents event={item} />;
        })}
      </div>
    </section>
  );
};

export default AvailableEvents;
