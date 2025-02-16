import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false); // Close the modal after search
  };

  return (
    <nav className="shadow-md relative z-10 bg-opacity-95 h-20 text-white bg-[#232442]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-20 items-center">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold">
          Snea<span className="text-4xl font-bold text-[#48B4BB]">ker.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="font-semibold hover:text-[#48B4BB]  transition cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="/categories"
            className="font-semibold hover:text-[#48B4BB]  transition cursor-pointer"
          >
            Categories
          </Link>
          <Link
            to="/blog"
            className="font-semibold hover:text-[#48B4BB]  transition cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="font-semibold hover:text-[#48B4BB]  transition cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="font-semibold hover:text-[#48B4BB]  transition cursor-pointer"
          >
            FAQ
          </Link>
          <Link
            to="/admin-panel"
            className="font-semibold hover:text-[#48B4BB]  transition cursor-pointer"
          >
            AdminPanel
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="text-white hover:scale-110 transition-transform duration-200"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Shopping Cart */}
          <a
            href="/cart"
            className="text-white hover:scale-110 transition-transform duration-200"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>

          {/* Profile / Login Button */}
          {/* {user && user?.email ? ( */}
          {/* <button
              onClick={logOut}
              className="bg-gradient-to-r from-[#81baa0] to-[#48B4BB] lg:px-7 font-semibold px-4 py-2 rounded-md hover:scale-105 transition-transform duration-200"
            >
              Log Out
            </button>
          ) : ( */}
          {/* <Link
            to="/login"
            className="bg-gradient-to-r from-[#81baa0] to-[#48B4BB] lg:px-7 font-semibold px-4 py-2 rounded-md hover:scale-105 transition-transform duration-200"
          >
            Login
          </Link> */}

          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-gradient-to-r from-[#81baa0] to-[#48B4BB] lg:px-7 font-semibold px-4 py-2 rounded-md hover:scale-105 transition-transform duration-200"
          >
            Login
          </button>

          {/* Login Modal */}
          {isLoginOpen && (
            <LoginPage
              setIsLoginOpen={setIsLoginOpen}
              setIsRegisterOpen={setIsRegisterOpen}
            />
          )}

          {/* Register Modal */}
          {isRegisterOpen && (
            <RegisterPage
              setIsRegisterOpen={setIsRegisterOpen}
              setIsLoginOpen={setIsLoginOpen}
            />
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:scale-110 transition-transform duration-200"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="absolute  top-20 lg:left-80 w-full lg:w-3/5 bg-[#232442] text-white shadow-md p-4 transform transition-all ease-out duration-100">
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-white text-black rounded-lg focus:outline-none focus:ring-2"
            />
            <button
              onClick={handleSearch}
              className="ml-2 text-white hover:scale-110 transition-transform duration-200"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              onClick={toggleSearch}
              className="ml-2 text-white hover:scale-110 transition-transform duration-200"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center text-white bg-[#232442] shadow-md p-4">
          <Link
            to="/"
            className="block p-2 text-white hover:text-[#48B4BB] hover:scale-105 transition-transform duration-200"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block p-2 text-white hover:text-[#48B4BB] hover:scale-105 transition-transform duration-200"
          >
            Shop
          </Link>
          <Link
            to="/categories"
            className="block p-2 text-white hover:text-[#48B4BB] hover:scale-105 transition-transform duration-200"
          >
            Categories
          </Link>
          <Link
            to="/blog"
            className="block p-2 text-white hover:text-[#48B4BB] hover:scale-105 transition-transform duration-200"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block p-2 text-white hover:text-[#48B4BB] hover:scale-105 transition-transform duration-200"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
