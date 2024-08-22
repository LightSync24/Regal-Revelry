import React from "react";
import { Link } from "react-router-dom";

const SlidingButton = ({text}) => {
  return (
    <Link
      to={`/${text}`}
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
        Explore {text}
      </span>
      <span className="relative invisible">Explore {text}</span>
    </Link>
  );
};

export default SlidingButton;