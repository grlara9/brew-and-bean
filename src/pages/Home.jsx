import Hero from "../components/Hero.jsx";
import FeaturedDrinks from "../components/FeaturedDrinks.jsx";
import AboutSection from "../components/AboutSection.jsx";
import menuItems from "../data/menu.js";
import { useState } from "react";

function Home() {
  const [items] = useState(menuItems.slice(0, 4));
  return (
    <>
      <Hero />
      <div>
        <h1 className="text-5xl text-expresso font-bold font-lora leading-tight">
          Our Menu
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <FeaturedDrinks
            key={item.id}
            name={item.name}
            image={item.image}
            category={item.category}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <AboutSection />
    </>
  );
}
export default Home;
