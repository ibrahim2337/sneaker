import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const socialHover = {
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.3 }
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a1a35] via-[#232442] to-[#2c2956] text-white pt-12 pb-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-[#48B4BB] to-purple-500 blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-[#48B4BB] blur-3xl -bottom-20 -right-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="transform transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-[#48B4BB] bg-clip-text text-transparent">
              Snea<span className="text-[#48B4BB]">ker.</span>
            </h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Your favorite sneaker shop. Get the latest styles with unbeatable
              deals and premium quality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="transform transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#48B4BB] to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={fadeInUp} className="transform transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Customer Service
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#48B4BB] to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/return"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-300 hover:text-[#48B4BB] transition duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#48B4BB] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Customer Support
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter & Social Media */}
          <motion.div variants={fadeInUp} className="transform transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Subscribe to Newsletter
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#48B4BB] to-transparent"></span>
            </h3>
            <p className="text-gray-300 mb-4">
              Get updates about new arrivals and exclusive discounts.
            </p>
            <div className="relative mt-4 group">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 pr-20 rounded-lg focus:outline-none bg-[#1a1a30] border border-gray-700 focus:border-[#48B4BB] transition-all duration-300 text-white"
              />
              <button className="absolute right-1 top-1 bg-gradient-to-r from-[#48B4BB] to-[#3a9ca6] px-4 py-2 rounded-md hover:opacity-90 transition duration-200">
                Join
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-5 mt-6 justify-center sm:justify-start">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-[#48B4BB] transition duration-200 bg-[#1a1a30] p-2.5 rounded-full"
                whileHover={socialHover}
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-[#48B4BB] transition duration-200 bg-[#1a1a30] p-2.5 rounded-full"
                whileHover={socialHover}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-[#48B4BB] transition duration-200 bg-[#1a1a30] p-2.5 rounded-full"
                whileHover={socialHover}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-[#48B4BB] transition duration-200 bg-[#1a1a30] p-2.5 rounded-full"
                whileHover={socialHover}
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"></div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Sneaker. All rights reserved.</p>
          <p className="mt-2 text-xs">Designed with ❤️ for sneaker enthusiasts</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
