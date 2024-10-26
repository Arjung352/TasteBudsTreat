import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="features">
      <h1 className="text-center text-5xl font-WorkSans my-4">FAQ</h1>
      <div className="feature my-8 ">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              className={`accordion ${
                activeIndex === index ? "active" : ""
              } shadow-md`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
            <div className={`panel ${activeIndex === index ? "open" : ""}`}>
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
    question: "What is Geek Appointment?",
    answer:
      "Geek Appointment is a web platform designed for students to book appointments with faculty members of the Department of Computer Science & Engineering at Sant Longowal Institute of Engineering & Technology, Longowal. Our goal is to streamline communication between students and faculty, making it easier to seek guidance and support.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "To book an appointment, simply visit our website, select the faculty member you wish to meet, choose a suitable time slot from their available schedule, and submit your request. You will receive a confirmation once your appointment is approved.",
  },
  {
    question: "Who are the developers of this project?",
    answer:
      "The Geek Appointment project has been developed by a dedicated team of students: Ansh Bansal, Arjun Gupta, Adarsh Sharma, and Aakansha. Their combined efforts have brought this innovative solution to life.",
  },
  {
    question: "Is there a limit to how many appointments I can book?",
    answer:
      "Currently, students can book up to three appointments per week to ensure everyone has a fair opportunity to connect with faculty. If you require more time, please discuss it directly with the faculty member.",
  },
  {
    question: "What if I need to cancel my appointment?",
    answer:
      "If you need to cancel your appointment, please do so at least 24 hours in advance. You can easily cancel your appointment through the website, and the faculty member will be notified automatically.",
  },
  {
    question: "Are the appointments held in person or online?",
    answer:
      "Appointments can be held either in person at the faculty's office or online via video conferencing, depending on the preference of the faculty member and the student. You can specify your preference when booking.",
  },
  {
    question: "How can I contact support if I have issues?",
    answer:
      "If you encounter any issues while using the Geek Appointment platform, you can reach our support team via the contact form on the website or through our official email. We aim to respond to all inquiries promptly.",
  },
  {
    question: "Is there a mobile version of Geek Appointment?",
    answer:
      "Yes, Geek Appointment is optimized for mobile devices, allowing you to book appointments conveniently from your smartphone or tablet.",
  },
  {
    question: "What should I do if my preferred time slot is unavailable?",
    answer:
      "If your preferred time slot is unavailable, we recommend checking other available slots or contacting the faculty member directly to discuss alternative times.",
  },
  {
    question: "Is my personal information safe on Geek Appointment?",
    answer:
      "Absolutely. We prioritize your privacy and security. All personal information is securely stored and only accessible by authorized personnel for appointment-related purposes.",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
