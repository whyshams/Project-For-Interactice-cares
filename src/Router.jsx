import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Frequent from "./Pages/Frequent";
import Techs from "./Pages/Techs";
import Testimonials from "./Pages/Testimonials";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Landing from "./Pages/Landing";

const Router = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<Frequent />} />
          <Route path="technology" element={<Techs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Router;
