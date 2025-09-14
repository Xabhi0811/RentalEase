// components/BookingPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const  SectionPages = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  useEffect(() => {
    fetchPropertyDetails();
  }, [propertyId]);

  const fetchPropertyDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
  `${import.meta.env.VITE_BACKEND_URL}/hosting/${propertyId}`
);
      setProperty(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching property details:', err);
      setError('Failed to load property details. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    // Implement your booking submission logic here
    console.log('Booking data:', bookingData);
    alert('Booking functionality would be implemented here!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-md">
          <svg className="animate-spin h-12 w-12 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z"></path>
          </svg>
          <p className="mt-4 text-lg text-blue-800">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-6 rounded-xl shadow-md max-w-md">
          <div className="bg-blue-50 p-4 rounded-lg">
            <svg className="h-10 w-10 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-blue-800 mt-3">{error}</p>
            <button 
              onClick={() => navigate(-1)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Properties
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img 
                src={property.Image} 
                alt={property.placename}
                className="h-64 w-full object-cover md:h-full"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                }}
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                {property.location}
              </div>
              <h1 className="mt-2 text-2xl font-bold text-blue-900">{property.placename}</h1>
              <p className="mt-2 text-gray-600">{property.address}</p>
              
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">${property.price}</span>
                <span className="text-gray-500">/night</span>
              </div>
              
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Property Details</h2>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.room} room{property.room !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Up to {property.capacity || 4} guests</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-blue-900">Host Information</h2>
                <p className="mt-2">
                  <span className="font-medium">Name:</span> {property.ownername}
                </p>
                <p className="mt-1">
                  <span className="font-medium">Contact:</span> {property.contactno}
                </p>
                <p className="mt-1">
                  <span className="font-medium">Email:</span> {property.email}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 px-8 py-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Book This Property</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max={property.capacity || 10}
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPages;