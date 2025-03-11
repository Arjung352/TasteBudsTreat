import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TailSpin } from "react-loader-spinner";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [UserMessage, setUserMessage] = useState("");
  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };
  const [messageStatus, setmessageStatus] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessageStatus(true);
    // await axios
    //   .post("https://taste-buds-treat-backend.vercel.app/send", formData)
    //   .then((response) => {
    //     setFormData({ name: "", email: "", message: "" });
    //     toast.success("Message Sent Successfully!");
    //   })
    //   .catch((error) => {
    //     toast.error("Failed to send message.");
    //   });
    setmessageStatus(false);
  };

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
              <div className="mt-2 font-WorkSans flex flex-col gap-4 max-h-full overflow-y-auto">
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
                <p className=" w-2/3 self-end text-sm p-2 text-white bg-green-400 rounded-xl mr-5">
                  Lorem ipsum is a dummy or placeholder text commonly used in
                  graphic design, publishing, and web development
                </p>
              </div>
            </div>
            {/* Message input field */}
            <form className="" onSubmit={handleSubmit}>
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
                  className=" bg-green-400 rounded-full text-white flex items-center mb-4 ml-4"
                >
                  {messageStatus ? (
                    <TailSpin
                      height="15"
                      width="15"
                      color="#ffffff"
                      ariaLabel="tail-spin-loading"
                      radius="2"
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
