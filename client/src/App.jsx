import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import EventsPage from "./Pages/EventsPage";
import CreateEventPage from "./Pages/CreateEventPage";
import ContactUs from "./Pages/ContactUs";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
