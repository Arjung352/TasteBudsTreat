import React from "react";
import { ShoppingCartIcon, TruckIcon, CreditCardIcon, GiftIcon } from "@heroicons/react/24/outline"; // Updated import path

const ServicesSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-10">
      <div className="max-w-6xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Text and Button */}
        <div className="flex flex-col justify-center">
          <h3 className="text-pink-500 text-sm uppercase font-bold mb-2">Our Story & Services</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Culinary Journey And Services
          </h1>
          <p className="text-gray-600 mb-6">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-32">
            Explore
          </button>
        </div>

        {/* Right Side - Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 - Catering */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <ShoppingCartIcon className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-lg text-gray-900 mb-2">Catering</h4>
            <p className="text-gray-600 text-center">
              Enjoy our seamless service for private events and functions.
            </p>
          </div>

          {/* Card 2 - Fast Delivery */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <TruckIcon className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-lg text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-gray-600 text-center">
              Quick delivery for when you're craving our best meals.
            </p>
          </div>

          {/* Card 3 - Online Ordering */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <CreditCardIcon className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-lg text-gray-900 mb-2">Online Ordering</h4>
            <p className="text-gray-600 text-center">
              Browse menus & order with ease using our Online Ordering system.
            </p>
          </div>

          {/* Card 4 - Gift Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <GiftIcon className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-lg text-gray-900 mb-2">Gift Cards</h4>
            <p className="text-gray-600 text-center">
              Share the joy of our exceptional dining with Food Gift Cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
