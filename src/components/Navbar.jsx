function Navigation() {
  return (
    <nav className="flex justify-around items-center h-[16vh] w-full bg-expresso font-lora text-white">
      <div className="font-bold">
        <a href="/home">Brew & Beans</a>
      </div>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Menu</li>
        <li>About US</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}
export default Navigation;
