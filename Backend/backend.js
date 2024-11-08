const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const restaurantRoutes = require("./routes/restaurant");
const restromenu =require("./routes/menu")

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Hey There!",
  });
});

// Restro Route
app.use("/api/restaurant", restaurantRoutes);

// Menu Route
app.use("/api/restaurant/menu", restromenu);

// Email route
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Ensure this is correct
    to: process.env.GMAIL_USER, // Recipient email
    subject: `Message from ${name}`,
    text: message,
    html: `<p>You have a new message from your contact form:</p>
           <p><strong>Name: </strong> ${name}</p>
           <p><strong>Email: </strong> ${email}</p>
           <p><strong>Message: </strong> ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email", error });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => {
    console.log("Database Connected sucessfully");
    app.listen(process.env.PORT, () => {
      console.log(`Backend listning at port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("error connecting to database");
  });
  