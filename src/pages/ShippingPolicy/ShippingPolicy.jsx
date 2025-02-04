import React from "react";

const ShoppingPolicy = () => {
  return (
    <section className="bg-gray-100 py-12 px-5 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Shopping Policy in Bangladesh
        </h2>

        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Eligibility for Shopping
            </h3>
            <p className="text-gray-600">
              Customers must be <strong>18 years or older</strong> to make a
              purchase on our website. If you are under 18, you may only make a
              purchase with the involvement of a parent or legal guardian.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Product Availability
            </h3>
            <p className="text-gray-600">
              All products available for sale on our website are subject to{" "}
              <strong>availability</strong>. In rare cases, if a product is out
              of stock after your order has been placed, we will contact you
              immediately for further instructions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Currency and Payments
            </h3>
            <p className="text-gray-600">
              All transactions on our website are conducted in{" "}
              <strong>Bangladeshi Taka (BDT)</strong>. We accept the following
              payment methods:
              <ul className="list-disc pl-5 mt-2">
                <li>Credit/Debit Cards (Visa, MasterCard)</li>
                <li>bKash, Nagad, and Rocket (mobile payment systems)</li>
                <li>
                  Cash on Delivery (COD) available for Dhaka and select
                  locations
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Order Processing & Confirmation
            </h3>
            <p className="text-gray-600">
              After you place an order, you will receive an{" "}
              <strong>order confirmation email</strong>. This email will contain
              your order details, including an order number and estimated
              delivery date. Orders are processed{" "}
              <strong>within 24 hours</strong> on business days
              (Monday-Saturday). Orders placed on Sunday or public holidays will
              be processed on the next business day.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Shipping & Delivery
            </h3>
            <p className="text-gray-600">
              Delivery will be made to the address provided during checkout.
              Please ensure that the delivery address is correct. We offer{" "}
              <strong>nationwide delivery</strong> to both{" "}
              <strong>urban</strong> and <strong>rural</strong> areas in
              Bangladesh. Shipping charges are calculated based on the delivery
              location and order size.
              <br />
              <strong>Same-day delivery</strong> is available for Dhaka city if
              the order is placed before <strong>12 PM</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Returns & Exchanges
            </h3>
            <p className="text-gray-600">
              <strong>Returns</strong>: We accept returns within{" "}
              <strong>7 days</strong> from the date of delivery, provided that
              the product is unused, in its original packaging, and in resalable
              condition.
              <br />
              <strong>Exchanges</strong>: If you receive the wrong size or
              product, we offer exchanges within <strong>7 days</strong> of
              delivery. Please contact our customer service team for assistance.
              <br />
              <strong>Non-returnable Items</strong>: Items that have been used,
              worn, or damaged by the customer are not eligible for return or
              exchange.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Discounts & Promotions
            </h3>
            <p className="text-gray-600">
              We occasionally offer <strong>discounts</strong>,{" "}
              <strong>promo codes</strong>, and <strong>sales events</strong>.
              These will be communicated via our website, emails, and social
              media.
              <br />
              <strong>Discount codes</strong> must be applied at checkout to be
              valid. Codes cannot be combined with other offers unless stated
              otherwise.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Customer Support
            </h3>
            <p className="text-gray-600">
              For any inquiries regarding products, orders, or returns, please
              contact us through:
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Email: <strong>support@yourshop.com</strong>
                </li>
                <li>
                  Phone:{" "}
                  <strong>+880-xxxxxxxxxx (Mon-Sat: 10 AM - 6 PM)</strong>
                </li>
                <li>
                  Social Media: <strong>@yourshopBD</strong>
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Privacy & Data Protection
            </h3>
            <p className="text-gray-600">
              We value your privacy and take the utmost care in securing your
              personal data. Please read our
              <strong>Privacy Policy</strong> to understand how we handle your
              information.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Policy Changes
            </h3>
            <p className="text-gray-600">
              We reserve the right to modify or update our shopping policy at
              any time. Any changes will be communicated via our website or
              other relevant channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingPolicy;
