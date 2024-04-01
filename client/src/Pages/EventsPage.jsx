import React from "react";
import { Body, Header, EventsHero, EventsHeroText } from "../components/EventsPage";
import "../css/EventsPage.css";

const EventsPage = () => {
  return (
    <>
      <Header />
      <EventsHero />
      <EventsHeroText />
      <Body />
    </>
  );
};

export default EventsPage;
