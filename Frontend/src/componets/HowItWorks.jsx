import { useState } from "react";
import {
  FaSearch,
  FaShieldAlt,
  FaHome,
  FaMoneyBillWave,
  FaUserCheck,
  FaLock,
  FaComments,
  FaAward,
} from "react-icons/fa";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("renter");

  return (
    <div className="max-w-5xl mx-auto bg-white/95 rounded-2xl shadow-2xl overflow-hidden my-10">
      {/* Header */}
      <div className="text-center p-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">How It Works</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          From short stays to long-term rentals – we make finding the right
          place stress-free
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center bg-gray-100 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab("renter")}
          className={`px-8 py-4 font-semibold transition-all ${
            activeTab === "renter"
              ? "text-blue-700 border-b-4 border-blue-700 bg-blue-50"
              : "text-gray-600 hover:bg-blue-50"
          }`}
        >
          For Renters
        </button>
        <button
          onClick={() => setActiveTab("host")}
          className={`px-8 py-4 font-semibold transition-all ${
            activeTab === "host"
              ? "text-blue-700 border-b-4 border-blue-700 bg-blue-50"
              : "text-gray-600 hover:bg-blue-50"
          }`}
        >
          For Hosts
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Renter Content */}
        {activeTab === "renter" && (
          <div>
            <h2 className="text-center text-blue-700 text-2xl font-bold mb-4">
              Finding Your Perfect Rental Home
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Follow these simple steps to find and secure your ideal rental
              property
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {[
                {
                  title: "Create Your Account",
                  desc: "Sign up and complete your profile with verification to build trust with hosts.",
                },
                {
                  title: "Search & Filter",
                  desc: "Use our advanced filters to find properties that match your criteria - location, price, amenities, and more.",
                },
                {
                  title: "Tour Virtually or In-Person",
                  desc: "Schedule a viewing through our platform. Many properties offer virtual tours.",
                },
                {
                  title: "Submit Your Application",
                  desc: "Once you've found the perfect place, submit your rental application through our secure platform.",
                },
                {
                  title: "Sign Lease & Move In",
                  desc: "Review and sign your lease digitally, pay your security deposit, and prepare for move-in!",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-md hover:-translate-y-1 transition"
                >
                  <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-blue-700 font-semibold text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            {/* Benefits */}
            <h2 className="text-center text-blue-700 text-2xl font-bold mb-6">
              Benefits for Renters
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                  <FaSearch /> Easy Search
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Advanced filters to find exactly what you need</li>
                  <li>Save your favorite properties</li>
                  <li>Get alerts for new listings</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                  <FaShieldAlt /> Safe Process
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Verified property listings</li>
                  <li>Secure payment processing</li>
                  <li>Identity verification for all users</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Host Content */}
        {activeTab === "host" && (
          <div>
            <h2 className="text-center text-blue-700 text-2xl font-bold mb-4">
              Renting Out Your Property
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Follow these simple steps to list and manage your rental property
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {[
                {
                  title: "Create Your Host Account",
                  desc: "Sign up as a host and complete your profile verification to build trust with potential renters.",
                },
                {
                  title: "List Your Property",
                  desc: "Create a detailed listing with photos, description, amenities, and pricing information.",
                },
                {
                  title: "Manage Inquiries & Applications",
                  desc: "Respond to inquiries, schedule viewings, and review rental applications through our platform.",
                },
                {
                  title: "Screen Tenants & Sign Lease",
                  desc: "Use our screening tools to verify tenant credentials and sign leases digitally.",
                },
                {
                  title: "Receive Payments & Manage Your Rental",
                  desc: "Get paid securely through our platform and use our tools to manage maintenance requests and communications.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-md hover:-translate-y-1 transition"
                >
                  <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-blue-700 font-semibold text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            {/* Benefits */}
            <h2 className="text-center text-blue-700 text-2xl font-bold mb-6">
              Benefits for Hosts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                  <FaHome /> Property Management
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Easy-to-use listing dashboard</li>
                  <li>Calendar for availability management</li>
                  <li>Automated booking system</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                  <FaMoneyBillWave /> Financial Tools
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Secure payment processing</li>
                  <li>Automated rent collection</li>
                  <li>Financial reporting tools</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                  <FaUserCheck /> Tenant Screening
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Comprehensive background checks</li>
                  <li>Credit history reports</li>
                  <li>Previous landlord references</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex-1 min-w-[250px] text-center p-6 bg-blue-50 rounded-xl">
            <FaLock className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="text-blue-700 font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              All your data and transactions are protected with bank-level
              security
            </p>
          </div>

          <div className="flex-1 min-w-[250px] text-center p-6 bg-blue-50 rounded-xl">
            <FaComments className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="text-blue-700 font-semibold mb-2">
              Direct Communication
            </h3>
            <p className="text-gray-600">
              Message hosts or renters directly through our secure platform
            </p>
          </div>

          <div className="flex-1 min-w-[250px] text-center p-6 bg-blue-50 rounded-xl">
            <FaAward className="text-4xl text-blue-700 mx-auto mb-3" />
            <h3 className="text-blue-700 font-semibold mb-2">Verified Users</h3>
            <p className="text-gray-600">
              All users undergo verification for a trusted community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
