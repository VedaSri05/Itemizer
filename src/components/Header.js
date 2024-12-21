function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <div className="font-bold text-xl">MyApp</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
