function Footer() {
  return (
    <footer>
      <div className="bg-cream px-6 py-10 md:py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="font-lora text-3xl font-bold text-expresso">
            Brew & Bean
          </h2>
          <a
            href="#location"
            className="text-[#B86B3A] transition-colors hover:text-[#3E2723]"
          >
            Our Location
          </a>
        </div>
      </div>
      <div className="bg-expresso px-6 py-5 text-center">
        <p className="text-sm font-inter text-cream">
          © {new Date().getFullYear()} Brew & Bean. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
