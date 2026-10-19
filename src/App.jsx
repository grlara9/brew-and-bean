import { Routes, Route } from "react-router";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
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
