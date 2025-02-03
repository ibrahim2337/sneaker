import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#232442] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold">
              Snea<span className="text-[#48B4BB]">ker.</span>
            </h2>
            <p className="mt-3 text-gray-400">
              Your favorite sneaker shop. Get the latest styles with unbeatable
              deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-gray-400">
              Get updates about new arrivals and discounts.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-[#48B4BB] px-4 py-2 rounded-r-md hover:bg-[#3a9ca6] transition duration-200">
                Subscribe
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#48B4BB] transition duration-200"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Sneaker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
