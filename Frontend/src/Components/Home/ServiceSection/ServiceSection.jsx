import React from "react";
import {
  ShoppingCartIcon,
  TruckIcon,
  CreditCardIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
const ServicesSection = () => {
  const redirecting = useNavigate();
  const redirect = () => {
    redirecting("/contact-us");
  };
  return (
    <div className="flex flex-col justify-center items-center  font-WorkSans my-20">
      <div className="max-w-6xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-red-600 text-xl uppercase font-medium mb-2">
            Our Story & Services
          </h3>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Our Culinary Journey And Services
          </h1>
          <p className="text-gray-600 mb-6">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button
            onClick={redirect}
            className="bg-green-500 max-md:self-center transition-all duration-300 hover:bg-olive text-lg text-white font-bold py-2 px-4 rounded-full w-40"
          >
            Contact-us
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-100 bg-gray-300 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-all ease-in-out">
            <ShoppingCartIcon className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-lg text-gray-900 mb-2">Catering</h4>
            <p className="text-gray-600 text-center">
              Enjoy our seamless service for private events and functions.
            </p>
          </div>

          <div className="backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-100 bg-gray-300 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-all ease-in-out">
            <TruckIcon className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-lg text-gray-900 mb-2">
              Fast Delivery
            </h4>
            <p className="text-gray-600 text-center">
              Quick delivery for when you're craving our best meals.
            </p>
          </div>

          <div className="backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-100 bg-gray-300 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-all ease-in-out">
            <CreditCardIcon className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-lg text-gray-900 mb-2">
              Online Ordering
            </h4>
            <p className="text-gray-600 text-center">
              Browse menus & order with ease using our Online Ordering system.
            </p>
          </div>

          <div className="backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-100 bg-gray-300 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-all ease-in-out">
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
