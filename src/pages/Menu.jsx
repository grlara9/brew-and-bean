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
      <main>
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
          <h1>Our Menu</h1>

          {/* 3. Filter Navigation Menu */}
          <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
            <button
              onClick={() => setCategoryFilter("all")}
              style={{
                fontWeight: categoryFilter === "all" ? "bold" : "normal",
              }}
            >
              All
            </button>
            <button
              onClick={() => setCategoryFilter("Iced Drinks")}
              style={{
                fontWeight: categoryFilter === "cold" ? "bold" : "normal",
              }}
            >
              Cold Drinks
            </button>
            <button
              onClick={() => setCategoryFilter("Hot Drinks")}
              style={{
                fontWeight: categoryFilter === "hot" ? "bold" : "normal",
              }}
            >
              Hot Drinks
            </button>
            <button
              onClick={() => setCategoryFilter("Tea & Wellness")}
              style={{
                fontWeight: categoryFilter === "tea" ? "bold" : "normal",
              }}
            >
              Teas
            </button>
            <button
              onClick={() => setCategoryFilter("Pastries")}
              style={{
                fontWeight: categoryFilter === "Pastries" ? "bold" : "normal",
              }}
            >
              Pastries
            </button>
            <button
              onClick={() => setCategoryFilter("Breakfast")}
              style={{
                fontWeight: categoryFilter === "Breakfast" ? "bold" : "normal",
              }}
            >
              Breakfast
            </button>
            <button
              onClick={() => setCategoryFilter("Sandwiches & Wraps")}
              style={{
                fontWeight:
                  categoryFilter === "Sandwiches & Wraps" ? "bold" : "normal",
              }}
            >
              Sandwiches & Wraps
            </button>
            <button
              onClick={() => setCategoryFilter("Sweets")}
              style={{
                fontWeight: categoryFilter === "Sweets" ? "bold" : "normal",
              }}
            >
              Sweets
            </button>
          </nav>

          {/* 4. Display the filtered results */}
          <h3>Results: ({filteredOption.length})</h3>
          {filteredOption.map((drink) => (
            <FeaturedDrinks
              key={drink.id}
              name={drink.name}
              category={drink.category}
              image={drink.image}
              price={drink.price}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Menu;
