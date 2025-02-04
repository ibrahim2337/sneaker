import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here, you can integrate with an API or Email service
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-5 lg:px-20 py-16">
      <h2 className="text-3xl font-bold text-center text-[#232442]">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Have any questions? Reach out to us!
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Contact Info */}
        <div className="bg-white shadow-lg p-6 rounded-lg space-y-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#48B4BB] text-2xl" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+880 17XX-XXXXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#48B4BB] text-2xl" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@youthextract.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#48B4BB] text-2xl" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Google Map (Optional) */}
          <div className="mt-4">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Dhaka,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-52 rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-6 rounded-lg"
        >
          <div className="mb-4">
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48B4BB] outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48B4BB] outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48B4BB] outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#81baa0] to-[#48B4BB] text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
