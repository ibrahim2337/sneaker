const ReturnPolicy = () => {
  return (
    <section className="bg-gray-100 py-12 lg:px-20 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#232442] text-center mb-6">
          Our Return Policy
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            At Sneaker, we want you to love your purchase. If for any reason
            you&apos;re not completely satisfied, we&lsquo;re here to help with
            easy returns and exchanges.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#232442] mb-4">
              Return Eligibility
            </h3>
            <p className="text-gray-600">
              You can return your shoes within 30 days of receiving them if they
              are unused, undamaged, and in the original packaging. This applies
              to shoes purchased online from our official website.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#232442] mb-4">
              How to Return
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                - Contact our customer service team via the &quot;Contact
                Us&quot; page.
              </li>
              <li>
                - Provide your order number and the reason for the return.
              </li>
              <li>- We will send you a prepaid return label for you to use.</li>
              <li>
                - Pack the shoes securely and attach the return label to the
                package.
              </li>
              <li>- Drop the package off at the nearest shipping center.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#232442] mb-4">
              Refund and Exchange Process
            </h3>
            <p className="text-gray-600">
              Once we receive your returned shoes, we&apos;ll process your
              refund or exchange. Refunds will be issued to the original payment
              method. Exchanges will be processed based on availability of the
              item.
            </p>
            <p className="text-gray-600 mt-4">
              Please allow up to 10 business days for processing. Shipping
              charges are non-refundable, and return shipping costs will be
              deducted from your refund unless the return is due to a defective
              product or shipping error.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#232442] mb-4">
              Non-Returnable Items
            </h3>
            <p className="text-gray-600">
              Certain items, such as personalized shoes, clearance items, or
              shoes that have been worn, are not eligible for return. Please
              check our return policy or contact customer service for further
              details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#232442] mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600">
              If you have any questions or concerns about our return policy,
              please don’t hesitate to reach out to our customer support team.
              We&apos;re here to help!
            </p>

            <a
              href="/contact"
              className="text-[#48B4BB] font-semibold hover:text-[#235f63] transition duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
