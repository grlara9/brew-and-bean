import React, { useState } from "react";

import menuData from "../data/menu.js";

function FeaturedDrinks() {
  const [items] = useState(menuData.slice(0, 4));

  return (
    <div className="my-5 mx-6">
      <div className="text-5xl text-dark-brown font-lora font-bold">
        <h1>Our Featured Drinks</h1>
      </div>
      <div className="grid grid-cols-4">
        {items.map((item) => {
          <div className="bg-cream rounded-2xl shadow-md border border-stone-100 overflow-hidden max-w-[18rem] transition hover:shadow-lg">
            <div className="relative aspect-square w-full">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://www.simplejoy.com/wp-content/uploads/2021/09/cold-brew-coffee-1365x2048.jpg"
                alt="cold brew coffee"
              />
            </div>
            <div className="p-4 flex flex-col justify-between min-h-[7rem]">
              <div>
                <h3 className="text-lg text-expresso font-bold font-inter leading-tight">
                  [item.name]
                </h3>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 pt-2 border-t border-stone-100/50">
                <span className="text-lg text-expresso font-extrabold font-inter">
                  {item.price}
                </span>
                <button className="text-xs bg-expresso text-white px-3 py-1.5 rounded-lg font-medium hover:opacity-90 transition">
                  Add
                </button>
              </div>
            </div>
          </div>;
        })}
        <div className="bg-cream rounded-2xl shadow-md border border-stone-100 overflow-hidden max-w-[18rem] transition hover:shadow-lg">
          <div className="relative aspect-square w-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.simplejoy.com/wp-content/uploads/2021/09/cold-brew-coffee-1365x2048.jpg"
              alt="cold brew coffee"
            />
          </div>
          <div className="p-4 flex flex-col justify-between min-h-[7rem]">
            <div>
              <h3 className="text-lg text-expresso font-bold font-inter leading-tight">
                Cold Brew Coffee
              </h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                Smooth, slow-steeped iced coffee served over ice with optional
                cream.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 pt-2 border-t border-stone-100/50">
              <span className="text-lg text-expresso font-extrabold font-inter">
                $4.50
              </span>
              <button className="text-xs bg-expresso text-white px-3 py-1.5 rounded-lg font-medium hover:opacity-90 transition">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="bg-cream rounded-2xl shadow-md border border-stone-100 overflow-hidden max-w-[18rem] transition hover:shadow-lg">
          <div className="relative aspect-square w-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.simplejoy.com/wp-content/uploads/2021/09/cold-brew-coffee-1365x2048.jpg"
              alt="cold brew coffee"
            />
          </div>
          <div className="p-4 flex flex-col justify-between min-h-[7rem]">
            <div>
              <h3 className="text-lg text-expresso font-bold font-inter leading-tight">
                Cold Brew Coffee
              </h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                Smooth, slow-steeped iced coffee served over ice with optional
                cream.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 pt-2 border-t border-stone-100/50">
              <span className="text-lg text-expresso font-extrabold font-inter">
                $4.50
              </span>
              <button className="text-xs bg-expresso text-white px-3 py-1.5 rounded-lg font-medium hover:opacity-90 transition">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="bg-cream rounded-2xl shadow-md border border-stone-100 overflow-hidden max-w-[18rem] transition hover:shadow-lg">
          <div className="relative aspect-square w-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.simplejoy.com/wp-content/uploads/2021/09/cold-brew-coffee-1365x2048.jpg"
              alt="cold brew coffee"
            />
          </div>
          <div className="p-4 flex flex-col justify-between min-h-[7rem]">
            <div>
              <h3 className="text-lg text-expresso font-bold font-inter leading-tight">
                Cold Brew Coffee
              </h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                Smooth, slow-steeped iced coffee served over ice with optional
                cream.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 pt-2 border-t border-stone-100/50">
              <span className="text-lg text-expresso font-extrabold font-inter">
                $4.50
              </span>
              <button className="text-xs bg-expresso text-white px-3 py-1.5 rounded-lg font-medium hover:opacity-90 transition">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedDrinks;
