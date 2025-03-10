import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4 animate-pulse">
        Payment Successful!
      </h1>
      <p className="text-lg md:text-2xl mb-6 text-gray-700">
        Your order is on the way. Thank you for shopping with us!
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt="Success"
        className="w-36 md:w-48 mb-8"
      />

      <p className="text-gray-600 mb-4">
        Redirecting to the homepage in{" "}
        <span className="font-bold">{countdown}</span> seconds...
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 mt-4 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-300"
      >
        Go to Homepage
      </button>
    </div>
  );
};
export default PaymentSuccess;
