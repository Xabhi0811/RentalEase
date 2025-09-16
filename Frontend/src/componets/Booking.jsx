// components/BookingForm.jsx
import { useState } from "react";
import axios from "axios";

const BookingForm = ({ propertyId, token }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    contactno: "",
    adharno: "",
    age: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      if (!formData.fullname || !formData.contactno || !formData.adharno || !formData.age) {
        setMessage("Please fill all required fields");
        return;
      }
    }
    setCurrentStep(currentStep + 1);
    setMessage(""); // Clear any previous messages
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setMessage(""); // Clear any previous messages
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/booking/create`,
        {
          hostingId: propertyId,
          fullname: formData.fullname,
          contactno: formData.contactno,
          adharno: formData.adharno,
          age: formData.age,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(`✅ ${response.data.message}. Total Price: ₹${response.data.booking.totalPrice}`);
      setFormData({ 
        fullname: "", 
        contactno: "", 
        adharno: "", 
        age: "", 
        checkIn: "", 
        checkOut: "", 
        guests: 1 
      });
      setCurrentStep(1);
    } catch (err) {
      console.error("Booking error:", err.response?.data || err.message);
      setMessage(err.response?.data?.error || "Booking failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Calculate minimum date for check-out (day after check-in)
  const minCheckOutDate = formData.checkIn 
    ? new Date(new Date(formData.checkIn).getTime() + 86400000).toISOString().split('T')[0]
    : '';

  // Format contact number as user types
  const formatContactNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  // Format Aadhar number as user types
  const formatAadharNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 4) return numbers;
    if (numbers.length <= 8) return `${numbers.slice(0, 4)} ${numbers.slice(4)}`;
    return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 12)}`;
  };

  // Handle input with formatting
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'contactno') {
      formattedValue = formatContactNumber(value);
    } else if (name === 'adharno') {
      formattedValue = formatAadharNumber(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  // Step 1: Personal Information
  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h3 className="text-xl font-semibold text-blue-800">Personal Information</h3>
        <p className="text-sm text-gray-500 mt-1">We need some details to complete your booking</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-blue-700 flex items-center">
            Full Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-blue-100 p-3.5 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none bg-blue-50/30"
              placeholder="Enter your full name"
            />
            <span className="absolute right-3 top-3.5 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-700 flex items-center">
              Contact Number
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="contactno"
                value={formData.contactno}
                onChange={handleInputChange}
                required
                maxLength="12"
                className="w-full rounded-lg border border-blue-100 p-3.5 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none bg-blue-50/30"
                placeholder="123-456-7890"
              />
              <span className="absolute right-3 top-3.5 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-700 flex items-center">
              Age
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="18"
                max="100"
                className="w-full rounded-lg border border-blue-100 p-3.5 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none bg-blue-50/30"
                placeholder="Enter your age"
              />
              <span className="absolute right-3 top-3.5 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-blue-700 flex items-center">
            Aadhar Number
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="adharno"
              value={formData.adharno}
              onChange={handleInputChange}
              required
              maxLength="14"
              className="w-full rounded-lg border border-blue-100 p-3.5 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none bg-blue-50/30"
              placeholder="1234 5678 9012"
            />
            <span className="absolute right-3 top-3.5 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Enter 12-digit Aadhar number without dashes</p>
        </div>
      </div>

      <button
        type="button"
        onClick={nextStep}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center group"
      >
        Continue to Booking Details
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );

  // Step 2: Booking Details
  const renderBookingDetails = () => (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h3 className="text-xl font-semibold text-blue-800">Booking Details</h3>
        <p className="text-sm text-gray-500 mt-1">Select your stay dates and number of guests</p>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-700 flex items-center">
              Check-in Date
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full rounded-lg border border-blue-100 p-3.5 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none bg-blue-50/30"
              />
              <span className="absolute right-3 top-3.5 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-700 flex items-center">
              Check-out Date
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                min={minCheckOutDate}
                className="w-full rounded-lg border border-blue-100 p-3.5 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none bg-blue-50/30"
              />
              <span className="absolute right-3 top-3.5 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-blue-700 flex items-center">
            Number of Guests
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-blue-100 p-3.5 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 appearance-none outline-none bg-blue-50/30"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
            <span className="absolute right-3 top-3.5 text-blue-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="flex-1 bg-white text-blue-600 border border-blue-200 py-3.5 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md font-medium flex items-center justify-center group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 transition-all duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Complete Booking"
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6 border border-blue-100">
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">Reserve Your Stay</h2>
      <p className="text-gray-500 text-center mb-6">Secure your booking in just a few steps</p>
      
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative max-w-md mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-blue-100 transform -translate-y-1/2 -z-10 rounded-full"></div>
          <div 
            className="absolute top-1/2 left-0 h-1.5 bg-blue-500 transform -translate-y-1/2 -z-10 transition-all duration-500 rounded-full" 
            style={{ width: currentStep === 1 ? '0%' : '100%' }}
          ></div>
          
          <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-blue-100'}`}>
              <span className="font-medium">1</span>
            </div>
            <span className="text-xs mt-2 font-medium">Personal Info</span>
          </div>
          
          <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-blue-100'}`}>
              <span className="font-medium">2</span>
            </div>
            <span className="text-xs mt-2 font-medium">Booking Details</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {currentStep === 1 ? renderPersonalInfo() : renderBookingDetails()}
      </form>

      {message && (
        <div className={`mt-5 p-4 rounded-lg text-center font-medium ${message.includes('✅') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default BookingForm;