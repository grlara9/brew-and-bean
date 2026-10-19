import { Routes, Route } from "react-router";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDrinks from "./components/FeaturedDrinks";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import "./App.css";

import menuItems from "./data/menu";

function App() {
  const [item] = useState(menuItems.slice(0, 4));
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
