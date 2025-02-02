import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    console.log("Search modal open:", !isSearchOpen); // Debug log
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsProfileOpen(true); // Open profile menu after login
  };
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <nav className=" shadow-md relative z-10 bg-opacity-10 h-20 text-white bg-black">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-20 items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold ">
          Cloth & Co.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="">
            Home
          </a>
          <a href="/shop" className="">
            Shop
          </a>
          <a href="/categories" className="">
            Categories
          </a>
          <a href="/blog" className="">
            Blog
          </a>
          <a href="/contact" className="">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button onClick={toggleSearch} className=" text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Shopping Cart */}
          <a href="/cart" className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>

          {/* Profile / Login Button */}
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Orders
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-gradient-to-r from-[#81baa0] to-[#46a39c]  lg:px-7 px-4 py-2 rounded-md "
            >
              Login
            </button>
          )}

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full shadow-md p-4 z-50">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-white text-black rounded-lg focus:outline-none focus:ring-2"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center text-white bg-[#232442] shadow-md p-4">
          <a href="/" className="block  p-2 rounded">
            Home
          </a>
          <a href="/shop" className="block p-2 ">
            Shop
          </a>
          <a href="/categories" className="block p-2">
            Categories
          </a>
          <a href="/blog" className="block p-2">
            Blog
          </a>
          <a href="/contact" className="block p-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
