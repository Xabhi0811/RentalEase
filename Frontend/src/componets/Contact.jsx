import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gradient-to-br from-sky-200/70 via-sky-300/80 to-sky-200/70 bg-fixed">
      <div className="w-full max-w-3xl bg-white/95 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <h1 className="text-4xl font-bold mb-3 drop-shadow-md">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Get in touch with our team for any questions about properties,
            bookings, or support
          </p>
        </div>

        {/* Content */}
        <div className="px-8 py-12 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 relative inline-block pb-2">
                Send Us a Message
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-[3px] bg-blue-700"></span>
              </h2>
              <p className="text-gray-600 mt-3 text-base">
                We're here to help with any questions about our rental
                properties
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-blue-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-blue-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-semibold text-blue-700"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 font-semibold text-blue-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="property-inquiry">Property Inquiry</option>
                  <option value="booking">Booking Question</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-blue-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md min-h-[150px] resize-y focus:ring-2 focus:ring-blue-400 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-md shadow-md transition-transform transform hover:-translate-y-1"
              >
                Send Message
              </button>

              {/* Footer */}
              <p className="text-center text-sm text-gray-500 mt-4">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
