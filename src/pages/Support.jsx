import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Support = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading toast
    const loadingToastId = toast.loading("Submitting your message...");

    // Simulate form submission delay (e.g., API call)
    setIsSubmitting(true);
    setTimeout(() => {
      toast.dismiss(loadingToastId); // Dismiss loading toast
      toast.success("Your message has been submitted successfully! 🎉", {
        position: "top-center",
      });

      setIsSubmitting(false); // Reset form submission state
      setFormData({ name: "", email: "", message: "" }); // Clear form fields
    }, 2000);
  };

  return (
    <div className="pt-36">
      <Helmet>
        <title>Sport || Support</title>
      </Helmet>
      <div className="w-11/12 max-w-4xl mx-auto px-6 py-12 border shadow-xl rounded-lg">
        <h1 className="text-4xl font-semibold text-center  mb-8">Support</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold  mb-4">
            Need Help? We’re Here to Assist!
          </h2>
          <p className="text-lg mb-6">
            If you're experiencing any issues, please feel free to reach out to
            our support team. We're happy to help with any questions or concerns
            you may have.
          </p>
          <p className="text-lg ">
            You can also check our{" "}
            <Link
              to={"/faq"}
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>{" "}
            page for quick answers to common questions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold  mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-6 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-6 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="px-6 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                rows="6"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-4 border-t-4 border-blue-500 rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Contact Info */}
        <section className="mt-10 text-center">
          <p className="text-lg mb-2">You can also reach us at:</p>
          <p className="text-lg font-semibold">support@sportszone.com</p>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Support;
