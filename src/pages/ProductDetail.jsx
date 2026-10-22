import { useParams, Link } from "react-router";
import menuItems from "../data/menu.js";

function ProductDetail() {
  const { productId } = useParams();

  const drink = menuItems.find((item) => item.id === Number(productId));

  console.log("drink chosen " + drink);
  if (!drink) {
    return <h2>Item not found in our menu!</h2>;
  }
  return (
    <main className="w-full mx-auto px-4 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          className="w-full max-w-full h-auto object-cover"
          src={drink.image}
          alt={drink.name}
        />

        <div>
          <h1 className="text-5xl text-expresso font-bold font-lora leading-tight md:text-6xl my-2">
            {drink.name}
          </h1>
          <span className="text-2xl text-expresso font-extrabold font-inter">
            $ {drink.price.toFixed(2)}
          </span>
          <p className="text-md text-stone-500 mt-1 line-clamp-2">
            {drink.description}
          </p>

          <h2 className="text-xl text-expresso font-bold font-lora leading-tightcmt-2 md:text-2xl my-2">
            Size
          </h2>
          <div>
            <button className="bg-light-coffee font-inter text-dark-brown text-lg p-2 my-2 rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-expresso hover:text-cream">
              Small
            </button>
            <button className="bg-light-coffee font-inter text-dark-brown text-lg p-2 mt-2 ml-3 rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-expresso hover:text-cream">
              Medium
            </button>
            <button className="bg-light-coffee font-inter text-dark-brown text-lg p-2 mt-2 ml-3 rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-expresso hover:text-cream">
              Large
            </button>
          </div>
          <h2 className="text-xl text-expresso font-bold font-lora leading-tight mt-2 md:text-2xl my-2">
            Quantity
          </h2>
          <div className="flex my-2 md:text-2xl my-2">
            <button className="border border-black px-2 rounded-l">-</button>
            <p className="border border-black px-6">5</p>
            <button className="border border-black px-2 rounded-r">+</button>
          </div>
          <button className="bg-expresso text-lg font-inter text-cream p-2 my-2 rounded-md w-full cursor-pointer transition-all duration-300 ease-out hover:bg-light-coffee hover:text-dark-brown md:text-2xl my-4">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
