import { useState } from "react";
import { Helmet } from "react-helmet-async";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Sample FAQ Data
  const faqs = [
    {
      question: "What is Sports Zone?",
      answer:
        "Sports Zone is an online platform where you can buy sports equipment and gear for various activities at affordable prices.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is placed, you will receive an email with a tracking number. Use the tracking number on our 'Track Order' page to monitor your shipment.",
    },
    {
      question: "What is the return policy?",
      answer:
        "You can return most items within 30 days of purchase, provided they are in original condition. Visit our 'Returns and Refunds' page for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to many countries worldwide. Shipping charges and delivery times vary depending on your location.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via the support page or email us directly at support@sportszone.com. Our team is available 24/7 to assist you.",
    },
  ];

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="pt-32">
      <Helmet>
        <title>Sport || FAQ</title>
      </Helmet>
      <div className="w-11/12 mx-auto px-6 py-12 shadow-xl border rounded-lg">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left  hover:bg-gray-50 rounded-lg focus:outline-none"
              >
                <span className="text-lg font-medium ">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4  border-t border-gray-200">
                  <p className="">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
