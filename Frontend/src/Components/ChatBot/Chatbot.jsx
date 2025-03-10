import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-olive transition-all hover:scale-105"
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
            initial={{ opacity: 0, y: 50 }} // Start hidden and below
            animate={{ opacity: 1, y: 0 }} // Slide up into view
            exit={{ opacity: 0, y: 50 }} // Slide down when closing
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-20 right-5 w-80 h-96 bg-white shadow-xl rounded-xl m-4 border z-50"
          >
            {/* Chatbot Header */}
            <div className="flex justify-between rounded-t-xl items-center p-2">
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dmxlqw5ix/image/upload/v1731066887/qxhi70lws9tx5ssy8ff3.png"
                  alt="Logo"
                  className="h-10"
                />
                <h2 className="text-lg font-semibold">Chatbot</h2>
              </div>
              <button className="mr-4" onClick={() => setOpen(false)}>
                <KeyboardArrowDownIcon />
              </button>
            </div>

            {/* Chatbot Content */}
            <p className="text-sm">This is where the chatbot will go...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;
