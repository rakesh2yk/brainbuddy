export default function Navbar() {
  return (
    <nav className="relative z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-900">
            BrainBuddy
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-3xl">
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/">Home</a>
            <a href="#">About</a>
            {/* Dropdown */}
<div className="relative group">

  <button className="flex items-center gap-1 hover:text-blue-700">
    Products
    <span className="text-xs">▼</span>
  </button>

  <div className="absolute left-0 top-full mt-2 z-50 w-56 bg-white shadow-lg rounded-md hidden group-hover:block">

    <a
      href="#"
      className="block px-4 py-3 hover:bg-gray-100"
    >
      Engineering Books
    </a>

    <a
      href="#"
      className="block px-4 py-3 hover:bg-gray-100"
    >
      Practice Tests
    </a>

    <a
      href="#"
      className="block px-4 py-3 hover:bg-gray-100"
    >
      AI Learning Tools
    </a>

  </div>

</div>
            <a href="/contact">Contact</a>
          </div>

        </div>

      </div>
    </nav>
  );
}