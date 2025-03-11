import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TailSpin } from "react-loader-spinner";
import { TasteBudsTreatAbout } from "./TasteBudsTreatAbout.js";
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

    // Add User Message to Chat History
    setChatHistory((history) => [
      ...history,
      { role: "User", text: UserMessage },
    ]);
    setUserMessage("");

    // Display "Thinking..." Message from Bot
    setmessageStatus(true);
    // Append user message to history before calling the bot function
    const updatedHistory = [
      ...chatHistory,
      { role: "User", text: UserMessage },
    ];

    await generateBotResponse(updatedHistory, setChatHistory, setmessageStatus);
  };

  const generateBotResponse = async (
    history,
    setChatHistory,
    setmessageStatus
  ) => {
    const lastUserMessage = history[history.length - 1].text.toLowerCase();
    let response = "";

    if (
      lastUserMessage.includes("about") ||
      lastUserMessage.includes("what is tastebudstreat")
    ) {
      response = TasteBudsTreatAbout.introduction;
    } else if (
      lastUserMessage.includes("founders") ||
      lastUserMessage.includes("who created tastebudstreat")
    ) {
      response = `TasteBudsTreat was founded by ${TasteBudsTreatAbout.team.founders.join(
        ", "
      )}.`;
    } else if (
      lastUserMessage.includes("contact") ||
      lastUserMessage.includes("email") ||
      lastUserMessage.includes("phone")
    ) {
      response = `You can reach us at ${TasteBudsTreatAbout.contact.email} or call ${TasteBudsTreatAbout.contact.phone}.`;
    } else if (lastUserMessage.includes("website")) {
      response = `Visit our website: ${TasteBudsTreatAbout.contact.website}`;
    } else if (lastUserMessage.includes("social media")) {
      response = `Follow us on Instagram: ${TasteBudsTreatAbout.contact.instagram}`;
    } else if (lastUserMessage.includes("menu")) {
      response =
        "Here's our menu:\n" +
        "🍔 Burgers & Sandwiches:\n" +
        TasteBudsTreatAbout.menu.burgersAndSandwiches
          .map((item) => `- ${item.name} - ${item.price}`)
          .join("\n") +
        "\n🍕 Pizza & Pasta:\n" +
        TasteBudsTreatAbout.menu.pizzaAndPasta
          .map((item) => `- ${item.name} - ${item.price}`)
          .join("\n") +
        "\n🥗 Healthy Bites:\n" +
        TasteBudsTreatAbout.menu.healthyBites
          .map((item) => `- ${item.name} - ${item.price}`)
          .join("\n") +
        "\n🍹 Beverages & Desserts:\n" +
        TasteBudsTreatAbout.menu.beveragesAndDesserts
          .map((item) => `- ${item.name} - ${item.price}`)
          .join("\n");
    } else {
      response =
        "Sorry, I couldn't understand that. Please ask about our services, menu, or contact details.";
    }

    // Update chat history with bot response
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "Model", text: response },
    ]);

    // Set message status to false after responding
    setmessageStatus(false);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-olive transition-all hover:scale-105"
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
          {open ? <CloseIcon /> : <ChatIcon />}
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
                  className={` rounded-full text-white flex items-center mb-4 ml-4 ${
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
