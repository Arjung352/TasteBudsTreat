import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    comment: "The food was absolutely delicious! I'll definitely be coming back.",
    image: "https://th.bing.com/th/id/OIP.MPqbmG0BodFiNA9UmO3n2AHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    name: "Jane Smith",
    comment: "Great atmosphere and excellent service. Highly recommended!",
    image: "https://th.bing.com/th/id/OIP.MPqbmG0BodFiNA9UmO3n2AHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    name: "Mike Johnson",
    comment: "The chef's special was out of this world. A must-try restaurant!",
    image: "https://th.bing.com/th/id/OIP.MPqbmG0BodFiNA9UmO3n2AHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="https://th.bing.com/th/id/OIP.MPqbmG0BodFiNA9UmO3n2AHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Chef"
              className="rounded-full w-64 h-64 object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-center space-y-4 text-center md:text-left">
          <h1 className='text-red-400'>Testimonial</h1>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say About Us
            </h1>
            <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
              Our customers love our food and service. Here's what they have to say about their experience with us.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xl font-medium">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">4.7</span>
              <span className="text-zinc-500 dark:text-zinc-400">(15K+ Reviews)</span>
            </div>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                    <p className="text-center text-sm text-gray-600">{testimonial.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentTestimonial === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;