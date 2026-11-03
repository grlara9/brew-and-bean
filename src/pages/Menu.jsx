import Hero from "../components/Hero";
import MenuCategories from "../components/MenuCategories.jsx";
import FeaturedDrinks from "../components/FeaturedDrinks.jsx";
import menuItems from "../data/menu.js";
import { useState } from "react";

function Menu() {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredOption = menuItems.filter((item) => {
    return categoryFilter === "all" || item.category === categoryFilter;
  });

  return (
    <>
      <div className="bg-[url(./public/images/hero-section-image.jpeg)] bg-cover bg-no-repeat bg-bottom h-[50vh] flex justify-center items-center">
        <div className="pl-8">
          <h1 className="text-5xl text-white font-lora font-bold md:text-7xl">
            Our Menu
          </h1>
        </div>
      </div>
      <main className="p-4">
        <div className="font-inter">
          <MenuCategories
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />

          {/* 4. Display the filtered results */}
          <h3 className="pt-2">Results: ({filteredOption.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredOption.map((drink) => (
              <FeaturedDrinks
                key={drink.id}
                id={drink.id}
                name={drink.name}
                category={drink.category}
                description={drink.description}
                image={drink.image}
                prices={drink.prices}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
export default Menu;
