const CustomerSupport = () => {
  return (
    <section className="bg-gray-100 py-12 px-5 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#232442] text-center mb-6">
          Customer Support
        </h2>

        <div className="space-y-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              1. Contact Us
            </h3>
            <p className="text-gray-600">
              Our customer support team is here to assist you with any
              inquiries. You can reach us via the following channels:
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>
                Email: <strong>support@yourshop.com</strong>
              </li>
              <li>
                Phone: <strong>+880-xxxxxxxxxx (Mon-Sat: 10 AM - 6 PM)</strong>
              </li>
              <li>
                Live Chat: Available on our website (Mon-Sat: 10 AM - 6 PM)
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              2. Frequently Asked Questions (FAQs)
            </h3>
            <p className="text-gray-600">
              For your convenience, please check out our <strong>FAQs</strong>{" "}
              section where we have answers to some of the most commonly asked
              questions. You may find a quick solution without needing to
              contact us.
            </p>
            <a
              href="/faq"
              className="text-[#48B4BB] font-semibold hover:text-[#235f63] transition duration-200"
            >
              Visit FAQs
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              3. Returns & Refunds
            </h3>
            <p className="text-gray-600">
              If you have any issues with a recent order, such as needing to
              initiate a return or request a refund, please review our{" "}
              <strong>Return & Refund Policy</strong> or reach out to us for
              assistance.
            </p>
            <a
              href="/return"
              className="text-[#48B4BB] font-semibold hover:text-[#235f63] transition duration-200"
            >
              Learn More About Returns & Refunds
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              4. Order Status
            </h3>
            <p className="text-gray-600">
              To track the status of your order, simply enter your order number
              and email address in our <strong>Order Tracking</strong> page.
            </p>
            <a
              href="/order-tracking"
              className="text-[#48B4BB] font-semibold hover:text-[#235f63] transition duration-200"
            >
              Track My Order
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              5. Shipping Information
            </h3>
            <p className="text-gray-600">
              For shipping inquiries, delivery updates, or if you want to learn
              more about our shipping policies, visit our{" "}
              <strong>Shipping Information</strong> page.
            </p>
            <a
              href="/shipping"
              className="text-[#48B4BB] font-semibold hover:text-[#235f63] transition duration-200"
            >
              Learn More About Shipping
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              6. Business Hours
            </h3>
            <p className="text-gray-600">
              Our customer support team is available from{" "}
              <strong>Monday to Saturday, 10:00 AM to 6:00 PM</strong>. We are
              closed on Sundays and public holidays.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              7. Social Media
            </h3>
            <p className="text-gray-600">
              You can also reach out to us through our social media pages for
              quick updates, promotions, or inquiries:
            </p>
            <ul className="flex justify-center space-x-6 mt-4">
              <li>
                <a
                  href="https://www.facebook.com/yourshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3b5998] hover:text-[#235f63] text-xl"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00acee] hover:text-[#235f63] text-xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yourshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C13584] hover:text-[#235f63] text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
