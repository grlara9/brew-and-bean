import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDrinks from "./components/FeaturedDrinks";
import AboutSection from "./components/AboutSection";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedDrinks />
      <AboutSection />
      <div className="font-lora min-h-screen bg-amber-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-amber-900">Brew and Beans</h1>
      </div>
    </div>
  );
}

export default App;
