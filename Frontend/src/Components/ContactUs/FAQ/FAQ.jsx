import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="features">
      <h1 className="text-center text-5xl font-WorkSans my-4 " id="FAQ">
        FAQ
      </h1>
      <div className="feature my-8 backdrop-filter backdrop-blur-md bg-opacity-15 ">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              className={`accordion ${
                activeIndex === index ? "active" : ""
              } shadow-md rounded-xl`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
            <div
              className={`panel border-none m-2 ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Data for FAQs
const faqData = [
  {
    question: "Who are the developers of TasteBudsTreat?",
    answer:
      "TasteBudsTreat has been developed by Arjun Gupta a BCA 3rd-year student from SGTBIMIT, affiliated with GGSIPU.I am passionate about leveraging modern technologies to create an innovative and secure food delivery service.",
  },
  {
    question:
      "What is TasteBudsTreat and how does it enhance the food delivery experience?",
    answer:
      "TasteBudsTreat is an advanced food delivery service that leverages AI to personalize recipe recommendations based on your tastes and preferences. By utilizing Gemini AI, the platform ensures every meal recommendation is unique, diverse, and tailored to your needs, providing a more exciting dining experience.",
  },
  {
    question: "How does the AI-driven recipe recommendation work?",
    answer:
      "TasteBudsTreat uses Gemini AI to analyze your preferences and suggest custom recipes tailored to your taste. The AI takes into account factors such as your past orders, dietary restrictions, and flavor preferences to generate personalized meal ideas.",
  },
  {
    question: "How secure is my data on TasteBudsTreat?",
    answer:
      "We prioritize your privacy and data security by implementing Clerk authentication for safe user logins and Razorpay for secure payment processing. Additionally, OAuth is used for secure admin access, ensuring your information is protected at all times.",
  },
  {
    question: "How do I log in to TasteBudsTreat?",
    answer:
      "You can log in securely using Clerk authentication, which allows for a smooth, safe login process. Once logged in, you can access personalized meal recommendations, track orders, and enjoy a seamless experience.",
  },
  {
    question: "What is the process for providing feedback on my experience?",
    answer:
      "We use Nodemailer to manage customer feedback. After your meal, you'll have the opportunity to provide feedback on your experience, which helps us continuously improve our service quality and customer satisfaction.",
  },
  {
    question: "Is TasteBudsTreat available on mobile devices?",
    answer:
      "Yes! The platform is fully responsive, ensuring a smooth and visually appealing experience across all devices. Whether you’re on a phone, tablet, or desktop, the user interface adapts for an optimal viewing experience.",
  },
  {
    question: "How can I pay for my orders?",
    answer:
      "Payments are securely processed through Razorpay, ensuring your payment details are handled safely. The platform supports a variety of payment methods for your convenience.",
  },
  {
    question: "Does TasteBudsTreat offer any social media engagement?",
    answer:
      "Yes! We actively engage with our audience on Instagram, sharing updates, promotions, and food recommendations to keep our community engaged and informed.",
  },
  {
    question: "What technologies are used to build TasteBudsTreat?",
    answer:
      "TasteBudsTreat is built with modern technologies including Gemini AI for personalized recommendations, Clerk for user authentication, Razorpay for secure payments, MUI and Tailwind CSS for a responsive and attractive UI, and Nodemailer for managing feedback. These technologies work together to provide a seamless and secure food delivery experience.",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
