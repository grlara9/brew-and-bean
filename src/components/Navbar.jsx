import { useState } from "react";
import { useEffect } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="flex justify-around items-center h-[10vh] w-full bg-expresso font-lora text-cream relative">
      <div className="font-bold">
        <a href="/home">Brew & Beans</a>
      </div>
      <ul className="hidden flex gap-2 md:flex space-x-6">
        <li className="hover:text-light-coffee">Home</li>
        <li>Menu</li>
        <li>About US</li>
        <li>Cart</li>
      </ul>
      <div
        className="md:hidden relative z-[60] flex flex-col justify-between h-6 w-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="hamburger menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[10px]" : ""
          }`}
        />
        {/* Middle bar */}
        <span
          className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        {/* Bottom bar */}
        <span
          className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[10px]" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white pt-24 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 text-black">
          <li className="cursor-pointer hover:text-light-coffee">Home</li>
          <li className="cursor-pointer hover:text-light-coffee">Menu</li>
          <li className="cursor-pointer hover:text-light-coffee">About Us</li>
          <li className="cursor-pointer hover:text-light-coffee">Cart</li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
