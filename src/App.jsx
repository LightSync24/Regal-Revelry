import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Events from "./Pages/Events";
import Venues from "./Pages/Venues";
import Contact from "./Pages/Contact";
import AvailableEvents from "./Pages/AvailableEvents";
import CreateEvent from "./Pages/CreateEvent";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar and Footer based on the current path */}
      {location.pathname !== "/createEvent" && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/availableEvents" element={<AvailableEvents />} />
        <Route path="/createEvent" element={<CreateEvent />} />
      </Routes>
      {location.pathname !== "/createEvent" && <Footer />}
    </>
  );
}

export default App;
