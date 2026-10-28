import { Link } from "react-router";

function FeaturedDrinks({ id, title, name, image, description, price }) {
  return (
    <div className="my-5 mx-6">
      <div className="bg-cream rounded-2xl shadow-md border border-stone-100 overflow-hidden w-full transition hover:shadow-lg">
        <div className="relative aspect-square w-full">
          <Link to={`/menu/${id}`}>
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </Link>
        </div>
        <div className="p-4 flex flex-col justify-between min-h-[7rem]">
          <div>
            <h3 className="text-lg text-expresso font-bold font-inter leading-tight"></h3>
            <p className="text-xs text-stone-500 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 pt-2 border-t border-stone-100/50">
            <span className="text-lg text-expresso font-extrabold font-inter">
              {price.toFixed(2)}
            </span>
            <button className="text-xs bg-expresso text-white px-3 py-1.5 rounded-lg font-medium hover:opacity-90 transition">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedDrinks;
