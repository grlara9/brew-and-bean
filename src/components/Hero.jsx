function Hero() {
  return (
    <div className="bg-[url(./public/images/hero-section-image.jpeg)] bg-cover bg-no-repeat bg-bottom h-[50vh] flex items-center">
      <div className="pl-8">
        <h1 className="text-5xl text-white font-lora font-bold">
          Great Coffee <br /> Brings people together
        </h1>
        <p className="text-lg text-white font-inter font-bold mt-2">
          Freshly brewed coffee, made with care.
        </p>
        <button className="bg-light-coffee font-inter text-dark-brown p-2 mt-2 rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-expresso hover:text-cream">
          Discover our Menu
        </button>
      </div>
    </div>
  );
}
export default Hero;
