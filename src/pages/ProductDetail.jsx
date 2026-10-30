import { useState } from "react";
import { useParams, Link } from "react-router";
import menuItems from "../data/menu.js";

function ProductDetail({ addToCart }) {
  const [count, setCount] = useState(1);

  const [size, setSize] = useState("");

  const { productId } = useParams();
  console.log("this is the id chosen" + productId);

  const drink = menuItems.find((item) => item.id === Number(productId));
  console.log("drink chosen ", drink);
  function handleAddToCart() {
    if (!size) {
      alert("Please select a size.");
      return;
    }
    const cartItemPayload = {
      id: drink.id,
      name: drink.name,
      image: drink.image,
      price: drink.price,
      size: size,
      quantity: count,
    };
    addToCart(cartItemPayload);
    console.log("Payload", addToCart);
  }

  if (!drink) {
    return (
      <div className="h-[90vh] flex flex-col justify-center items-center py-4">
        <h1 className="text-lg text-expresso font-bold font-inter leading-tight">
          Item not found in our menu!
        </h1>
        <Link
          to="/menu"
          className="mt-5 inline-flex items-center gap-2 font-inter text-sm font-semibold text-expresso underline-offset-4 transition hover:text-caramel hover:underline"
        >
          ← Back to Menu
        </Link>
      </div>
    );
  }
  return (
    <main className="w-full mx-auto px-4 pt-4">
      <div className="bg-cream my-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <button
              className="bg-light-coffee font-inter text-dark-brown text-lg p-2 my-2 rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-expresso hover:text-cream"
              onClick={() => setSize("small")}
            >
              Small
            </button>
            <button
              className="bg-light-coffee font-inter text-dark-brown text-lg p-2 mt-2 ml-3 rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-expresso hover:text-cream"
              onClick={() => setSize("medium")}
            >
              Medium
            </button>
            <button
              className="bg-light-coffee font-inter text-dark-brown text-lg p-2 mt-2 ml-3 rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-expresso hover:text-cream"
              onClick={() => setSize("large")}
            >
              Large
            </button>
          </div>
          <h2 className="text-xl text-expresso font-bold font-lora leading-tight mt-2 md:text-2xl my-2">
            Quantity
          </h2>
          <div className="flex my-2 md:text-2xl my-2">
            <button
              className="border border-black px-2 rounded-l"
              onClick={() =>
                setCount((previousCount) => Math.max(1, previousCount - 1))
              }
            >
              -
            </button>
            <p className="border border-black px-6">{count}</p>
            <button
              className="border border-black px-2 rounded-r"
              onClick={() =>
                setCount((previousCount) => Math.max(1, previousCount + 1))
              }
            >
              +
            </button>
          </div>

          <button
            className="bg-expresso text-lg font-inter text-cream p-2 my-2 rounded-md w-full cursor-pointer transition-all duration-300 ease-out hover:bg-light-coffee hover:text-dark-brown md:text-2xl my-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
