import React, { useState } from "react";

import {
  FaHome,
  FaBars,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaGithub
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-[Poppins] bg-gray-50 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-10 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-600 text-2xl font-bold flex items-center">
              <FaHome className="mr-2" /> RentalEase
            </span>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/list" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Properties
            </Link>
            <Link to="/WORK" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              How It Works
            </Link>
            <Link to="/us" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/property-host-form" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              List Property
            </Link>
            <Link to="/list" className="hidden md:block bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-300 hover:border-gray-400 shadow-sm">
              All properties
            </Link>
            <button
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/list" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Properties</Link>
            <Link to="/WORK" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">How It Works</Link>
         <Link to="/us" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            <button className="mt-2 w-full bg-white hover:bg-gray-100 text-gray-800 py-2 rounded-lg transition-all border border-gray-300">
              Sign Up
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 text-white hero-bg"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267') center/cover"
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find Your Perfect Home <span className="text-blue-400">with Ease</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            RentalEase connects property owners with people looking for their
            next home. List your property or find your ideal rental today.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-xl max-w-3xl mx-auto transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 relative">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-700">
                  <option className="text-gray-400">Select Property Type</option>
                  <option className="text-gray-700">Apartment/Flat</option>
                  <option className="text-gray-700">PG/Hostel</option>
                  <option className="text-gray-700">Private Room</option>
                  <option className="text-gray-700">Full House</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter Location"
                className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 bg-white text-gray-700"
              />
              <button className="flex-1 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Properties</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover some of our most popular rental properties, carefully selected for quality and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                  alt="Modern Apartment"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Modern City Apartment</h3>
                    <p className="text-gray-600 flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" /> Downtown District
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-semibold">
                    $1,200/mo
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 py-3 border-t border-gray-100">
                  <span className="flex items-center text-gray-600">
                    <FaBed className="mr-2 text-blue-500" /> 2 Beds
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaBath className="mr-2 text-blue-500" /> 1 Bath
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaRulerCombined className="mr-2 text-blue-500" /> 850 sq ft
                  </span>
                </div>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  View Details
                </button>
              </div>
            </div>

            {/* Property 2 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                  alt="Luxury Villa"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Luxury Villa</h3>
                    <p className="text-gray-600 flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" /> Riverside
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-semibold">
                    $3,500/mo
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 py-3 border-t border-gray-100">
                  <span className="flex items-center text-gray-600">
                    <FaBed className="mr-2 text-blue-500" /> 4 Beds
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaBath className="mr-2 text-blue-500" /> 3 Baths
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaRulerCombined className="mr-2 text-blue-500" /> 2,200 sq ft
                  </span>
                </div>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  View Details
                </button>
              </div>
            </div>

            {/* Property 3 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
                  alt="Cozy Studio"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                  New
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Cozy Studio Apartment</h3>
                    <p className="text-gray-600 flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" /> Midtown
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-semibold">
                    $850/mo
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 py-3 border-t border-gray-100">
                  <span className="flex items-center text-gray-600">
                    <FaBed className="mr-2 text-blue-500" /> 1 Bed
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaBath className="mr-2 text-blue-500" /> 1 Bath
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaRulerCombined className="mr-2 text-blue-500" /> 500 sq ft
                  </span>
                </div>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/list" className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg border-2 border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaHome className="mr-2 text-blue-500" /> RentalEase
              </h3>
              <p className="text-gray-400 mb-4">
                Making rental experiences simple and hassle-free for everyone.
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Office:</span> 1234 Rental Street, Suite 567
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to='/' className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/list' className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to='/WORK' className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to='/us' className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect With Us</h4>
              <div className="flex space-x-3 mb-6">
                <a className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                  <FaGithub />
                </a>
                <a className="bg-gray-800 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                  <FaTwitter />
                </a>
                <a className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                  <FaInstagram />
                </a>
                <a className="bg-gray-800 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                  <FaLinkedinIn />
                </a>
              </div>
              <p className="text-gray-400 mb-2">Subscribe to our newsletter</p>
              <div className="mt-2 flex rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 transition-all duration-300">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RentalEase. All rights reserved. | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;