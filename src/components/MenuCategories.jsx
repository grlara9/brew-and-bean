import { useState } from "react";

function MenuCategories({ categoryFilter, setCategoryFilter }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    { label: "All", value: "all" },
    { label: "Cold Drinks", value: "Iced Drinks" },
    { label: "Hot Drinks", value: "Hot Drinks" },
    { label: "Teas", value: "Tea & Wellness" },
    { label: "Pastries", value: "Pastries" },
    { label: "Breakfast", value: "Breakfast" },
    { label: "Sandwiches & Wraps", value: "Sandwiches & Wraps" },
    { label: "Sweets", value: "Sweets" },
  ];

  const handleCategoryClick = (value) => {
    setCategoryFilter(value);
    setIsCategoryOpen(false);
  };

  return (
    <nav className="font-inter relative">
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-5">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategoryClick(category.value)}
            className={`cursor-pointer hover:text-light-coffee ${
              categoryFilter === category.value ? "font-bold" : "font-normal"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          aria-label="Toggle menu categories"
          aria-expanded={isCategoryOpen}
          className="flex flex-col justify-between h-5 w-6 cursor-pointer"
        >
          <span className="h-0.5 w-6 bg-expresso" />
          <span className="h-0.5 w-6 bg-expresso" />
          <span className="h-0.5 w-6 bg-expresso" />
        </button>

        {/* Mobile category list */}
        {isCategoryOpen && (
          <div className="absolute left-0 top-8 z-50 w-56 rounded-md bg-white shadow-lg p-4">
            <div className="flex flex-col gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryClick(category.value)}
                  className={`text-left cursor-pointer hover:text-light-coffee ${
                    categoryFilter === category.value
                      ? "font-bold"
                      : "font-normal"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MenuCategories;
