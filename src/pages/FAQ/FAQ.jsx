import { useState } from "react";

const faqs = [
  {
    question: "What shoe size should I order?",
    answer:
      "To find the right shoe size, we recommend referring to our size guide available on each product page. If you are between sizes, we suggest going up a size for a more comfortable fit.",
  },
  {
    question: "Are your shoes true to size?",
    answer:
      "Our shoes are generally true to size, but we recommend checking the reviews or size guide for the specific style you are interested in. If in doubt, you may want to size up for extra comfort.",
  },
  {
    question: "Can I return or exchange shoes?",
    answer:
      "Yes, we offer returns or exchanges within 30 days of purchase, provided the shoes are unworn and in original condition. Please refer to our return policy for detailed instructions.",
  },
  {
    question: "How do I care for my shoes?",
    answer:
      "To extend the life of your shoes, we recommend cleaning them regularly using a damp cloth. For leather shoes, use a leather cleaner. Keep them in a cool, dry place to avoid damaging the material.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes, we offer free standard shipping on orders over $50. For orders under $50, a small shipping fee applies. Expedited shipping options are also available.",
  },
  {
    question: "Are the shoes waterproof?",
    answer:
      "Some of our shoes are made with waterproof materials, especially our outdoor and sports models. Please check the product description to see if the shoes you are interested in are waterproof.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto my-16 p-6">
      <h2 className="text-3xl font-bold text-center text-[#232442] mb-6">
        Frequently Asked Questions About Shoes
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-semibold text-[#232442] hover:text-[#48B4BB] py-3 transition duration-300"
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
