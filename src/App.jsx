import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDrinks from "./components/FeaturedDrinks";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedDrinks />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
