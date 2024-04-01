import React from "react";
import {
  Navbar,
  ContactHero,
  ContactHeroText,
  Experiences,
} from "../components/ContactUsPage/index";
import "../css/ContactUsPage.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactHeroText />
      <Experiences />
    </div>
  );
};

export default ContactUs;
