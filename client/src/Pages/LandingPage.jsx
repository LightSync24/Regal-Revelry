import {
  Hero,
  Navbar,
  Welcome,
  Magical,
  Venues,
  VenuesText,
  Business,
  More,
  Details,
  HappyClients,
  Cooking,
  NewsLetter,
  Footer,
} from "../components/LandingPage/index";
import '../css/LandingPage.css'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Magical />
      <Venues />
      <VenuesText />
      <Business />
      <More />
      <Details />
      <HappyClients />
      <Cooking />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default LandingPage;
