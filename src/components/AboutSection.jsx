function AboutSection() {
  return (
    <div className=" my-5 mx-6">
      <div className="grid grid-cols-1 gap-4 overflow-hidden shadow-lg bg-cream p-4 rounded-xl shadow-md border border-stone-100 md:grid-cols-2">
        <img
          className="h-124 w-124 rounded-lg flex-shrink-0"
          src="./public/images/about-section.jpg"
          alt="about me image"
        />

        <div className="p-4 w-[500px]">
          <h3 className="text-5xl text-expresso font-bold font-lora leading-tight">
            About Us
          </h3>
          <p className="text-md font-inter mt-1">
            Welcome to our coffee corner, where every cup tells a story of
            passion, precision, and exceptional flavor. We believe that a truly
            great cup of coffee begins long before the water hits the grounds,
            which is why we source only the finest, ethically produced beans
            from dedicated growers across the globe. Each batch is carefully
            roasted to unlock its unique characteristics, bringing you an
            aromatic experience that elevates your daily ritual. Whether you are
            fueling a busy morning or taking a slow moment to unwind, our
            mission is simple: to connect our community through the universal
            love of exceptional coffee, crafted with care and served with
            warmth.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
