import Navigation from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedDrinks from "../components/FeaturedDrinks.jsx";
import Footer from "../components/Footer";
import menuItems from "../data/menu.js";
import { useState } from "react";

function Menu() {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredOption = menuItems.filter((item) => {
    return categoryFilter === "all" || item.category === categoryFilter;
  });

  return (
    <>
      <Navigation />
      <main className="p-4">
        <div className="font-inter">
          <h1 className="text-5xl text-expresso font-bold font-lora leading-tight">
            Our Menu
          </h1>

          <nav className="flex justify-around text-black">
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("all")}
              style={{
                fontWeight: categoryFilter === "all" ? "bold" : "normal",
              }}
            >
              All
            </button>
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("Iced Drinks")}
              style={{
                fontWeight: categoryFilter === "cold" ? "bold" : "normal",
              }}
            >
              Cold Drinks
            </button>
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("Hot Drinks")}
              style={{
                fontWeight: categoryFilter === "hot" ? "bold" : "normal",
              }}
            >
              Hot Drinks
            </button>
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("Tea & Wellness")}
              style={{
                fontWeight: categoryFilter === "tea" ? "bold" : "normal",
              }}
            >
              Teas
            </button>
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("Pastries")}
              style={{
                fontWeight: categoryFilter === "Pastries" ? "bold" : "normal",
              }}
            >
              Pastries
            </button>
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("Breakfast")}
              style={{
                fontWeight: categoryFilter === "Breakfast" ? "bold" : "normal",
              }}
            >
              Breakfast
            </button>
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("Sandwiches & Wraps")}
              style={{
                fontWeight:
                  categoryFilter === "Sandwiches & Wraps" ? "bold" : "normal",
              }}
            >
              Sandwiches & Wraps
            </button>
            <button
              className="cursor-pointer hover:text-light-coffee"
              onClick={() => setCategoryFilter("Sweets")}
              style={{
                fontWeight: categoryFilter === "Sweets" ? "bold" : "normal",
              }}
            >
              Sweets
            </button>
          </nav>

          {/* 4. Display the filtered results */}
          <h3 className="pt-2">Results: ({filteredOption.length})</h3>
          <div className="grid grid-cols-4 gap-4">
            {filteredOption.map((drink) => (
              <FeaturedDrinks
                key={drink.id}
                name={drink.name}
                category={drink.category}
                description={drink.description}
                image={drink.image}
                price={drink.price}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Menu;
