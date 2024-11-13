import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import FAQ from "./FAQ/FAQ";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/send", formData)
      .then((response) => {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message Sent Successfully!");
      })
      .catch((error) => {
        setStatus("Failed to send message.");
        toast.error("Failed to send message.");
      });
  };

  return (
    <div>
      <div>
        <div className="relative mt-3">
          <div className="h-64 md:h-80 lg:h-96">
            <img
              src="https://b.zmtcdn.com/webFrontend/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg?output-format=webp"
              className="w-full h-full object-cover absolute top-0 left-0"
              alt="Background"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <p className="text-white font-WorkSans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              We Would Love To Hear From You!
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center px-4 md:px-8 mt-8">
          <div className="w-full max-w-2xl shadow-lg rounded-lg p-8 relative bg-white">
            <form className="relative z-10" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-1/3 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <FAQ />
        </div>
      </div>

      <div className="flex justify-center mt-7">
        <div className="w-full max-w-7xl px-4 md:px-8">
          <Footer />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ContactUs;
