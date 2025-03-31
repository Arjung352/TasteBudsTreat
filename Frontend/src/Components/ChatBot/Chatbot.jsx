import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TailSpin } from "react-loader-spinner";
function Chatbot() {
  const [open, setOpen] = useState(false);
  const [UserMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const [messageStatus, setmessageStatus] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!UserMessage.trim()) return;

    setChatHistory((prevHistory) => {
      const newHistory = [...prevHistory, { role: "User", text: UserMessage }];
      generateBotResponse(newHistory);
      return newHistory;
    });

    setUserMessage("");
    setmessageStatus(true);
  };

  const generateBotResponse = async (history) => {
    const lastUserMessage = history[history.length - 1].text.toLowerCase();

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "Model", text: "Thinking..." },
    ]);

    setmessageStatus(true); // Show loader

    // Check predefined responses first
    const predefinedResponses = {
      "about tastebudstreat":
        "TasteBudsTreat is your go-to food ordering platform, making it easier than ever to satisfy your cravings with just a few taps. We collaborate with top-rated restaurants, local eateries, and renowned cafes to bring you a diverse selection of cuisines, ensuring there's something for everyone.With a seamless ordering experience, real-time order tracking, and multiple payment options, TasteBudsTreat is designed for convenience and quality. Whether you're in the mood for comfort food, a quick snack, or a gourmet meal, we've got you covered.This platform was proudly built as a major project by three passionate 3rd-year BCA students from SGTBIMIT, driven by a shared love for technology and great food.",
      "what is tastebudstreat":
        "TasteBudsTreat is your go-to food ordering platform, making it easier than ever to satisfy your cravings with just a few taps. We collaborate with top-rated restaurants, local eateries, and renowned cafes to bring you a diverse selection of cuisines, ensuring there's something for everyone.With a seamless ordering experience, real-time order tracking, and multiple payment options, TasteBudsTreat is designed for convenience and quality. Whether you're in the mood for comfort food, a quick snack, or a gourmet meal, we've got you covered.This platform was proudly built as a major project by three passionate 3rd-year BCA students from SGTBIMIT, driven by a shared love for technology and great food.",
      menu: "Our menu includes Burgers, Pizzas, Pasta... and so much more you can check it out now!!",
      "payment options":
        "We accept UPI, credit/debit cards, and cash on delivery.",
      "contact information":
        "You can reach us at tastebudstreat29@gmail.com or you can reach out to our social media account https://www.instagram.com/tastebudstreat29/ or call +91 9999 88 2574 or fill the contact form from the Contact section.",
      contact:
        "You can reach us at tastebudstreat29@gmail.com or you can reach out to our social media account https://www.instagram.com/tastebudstreat29/ or call +91 9999 88 2574 or fill the contact form from the Contact section.",
      founder:
        "TasteBudsTreat was founded by three 3rd-year BCA students. You can check out more details in the About section.",
      founded:
        "TasteBudsTreat was founded by three 3rd-year BCA students. You can check out more details in the About section.",
      founders:
        "TasteBudsTreat was founded by three 3rd-year BCA students. You can check out more details in the About section.",
    };

    for (const key in predefinedResponses) {
      if (lastUserMessage.includes(key)) {
        setChatHistory((prevHistory) => {
          const updatedHistory = prevHistory.map((msg, index) =>
            index === prevHistory.length - 1 && msg.role === "Model"
              ? { ...msg, text: predefinedResponses[key] }
              : msg
          );

          return updatedHistory;
        });

        setmessageStatus(false);
        return;
      }
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: history.map(({ role, text }) => ({
            role,
            parts: [
              {
                text: `TasteBudsTreat is a food ordering platform by Arjun, Adarsh, and Ansh.Its a college project so food delivery cannot be done and so its a project so the food is not going to be delivered actually. Only answer queries related to food ordering, menu items, and delivery services. Do not answer anything outside this scope. User query: ${text}`,
              },
            ],
          })),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error("API Error");

      const botReply =
        data.candidates[0]?.content?.parts[0]?.text ||
        "Sorry, I couldn't understand that.";

      setChatHistory((prevHistory) => [
        ...prevHistory.slice(0, -1),
        { role: "Model", text: botReply },
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory.slice(0, -1),
        {
          role: "Model",
          text: "Oops! Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setmessageStatus(false);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-olive transition-all hover:scale-105"
        title="ChatBot"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          key={open ? "close" : "chat"}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? (
            <CloseIcon fontSize="large" />
          ) : (
            <img
              src="https://res.cloudinary.com/dzrjja888/image/upload/v1743273556/gemini-icon-on-a-transparent-background-free-png_vh8ump.webp"
              className="w-10 h-10"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Chatbot Window with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-20 right-5 w-80 h-[27rem] bg-white shadow-xl rounded-xl m-4 border z-50 flex flex-col justify-between"
          >
            <div className="flex flex-col overflow-auto">
              {/* Chatbot Header */}
              <div className="flex justify-between rounded-t-xl items-center p-2">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
                    alt="Logo"
                    className="h-10"
                  />
                  <h2 className="text-lg font-semibold font-WorkSans">
                    Chatbot
                  </h2>
                </div>
                <button className="mr-4" onClick={() => setOpen(false)}>
                  <KeyboardArrowDownIcon />
                </button>
              </div>

              {/* Chatbot Content */}
              <div className="mt-2 font-WorkSans flex flex-col gap-4 max-h-full w-full max-w-full ">
                {/* ChatBot dailog box */}
                <div className="flex">
                  <img
                    src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
                    alt="Logo"
                    className="h-6 self-end"
                  />
                  <p className=" text-sm bg-green-100 p-2 rounded-xl">
                    Hi There!👋
                    <br />
                    How can i help you today?
                  </p>
                </div>
                {/* User content */}
                {chatHistory.map((chat, index) =>
                  chat.role === "User" ? (
                    // User Message Styling
                    <p
                      key={index}
                      className="max-w-[66%] self-end text-sm p-2 text-white bg-green-400 rounded-xl mr-5"
                    >
                      {chat.text}
                    </p>
                  ) : (
                    // Bot Message Styling (Same as Initial Greeting)
                    <div key={index} className="flex items-start">
                      <img
                        src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
                        alt="Logo"
                        className="h-6 self-end"
                      />
                      <p className=" max-w-[66%] text-sm bg-green-100 p-2 rounded-xl ml-2">
                        {chat.text}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Message input field */}
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mt-4">
                <input
                  placeholder="Message.."
                  type="text"
                  name="UserMessage"
                  value={UserMessage}
                  onChange={handleInputChange}
                  className=" text-black font-semibold px-4 py-2 mx-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className={` rounded-full text-white flex items-center mb-4 ml-4 max-md:ml-0 ${
                    messageStatus ? "" : "bg-green-400"
                  }`}
                >
                  {messageStatus ? (
                    <TailSpin
                      height="25"
                      width="25"
                      color="#2F820c"
                      ariaLabel="tail-spin-loading"
                      radius="5"
                      wrapperStyle={{ display: "inline-block" }}
                      visible={true}
                    />
                  ) : (
                    <KeyboardArrowUpIcon />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;
