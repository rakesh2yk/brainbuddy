export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-700 cursor-pointer">
            Brain Buddy
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">

            <a href="#" className="hover:text-blue-700 transition">
              Home
            </a>

            <a href="#" className="hover:text-blue-700 transition">
              About
            </a>

            <a href="#" className="hover:text-blue-700 transition">
              Products
            </a>

            {/* Dropdown */}
            <div className="relative group">

              <button className="flex items-center gap-1 hover:text-blue-700 transition">
                Industrial Portfolio
                <span className="text-xs">▼</span>
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <a
                  href="#"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  Laser Cutting
                </a>

                <a
                  href="#"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  Industrial Fabrication
                </a>

              </div>

            </div>

            <a href="#" className="hover:text-blue-700 transition">
              Contact
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}