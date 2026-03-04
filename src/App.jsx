import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Services from "./components/Services.jsx";
import OurWork from "./components/OurWork.jsx";
import Teams from "./components/Teams.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
