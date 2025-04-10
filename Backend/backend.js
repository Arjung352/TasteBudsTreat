const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const restaurantRoutes = require("./routes/restaurant");
const restromenu = require("./routes/menu");
const dashboardRoute = require("./routes/dashboard");
const Cart = require("./routes/cart");
const userRoute = require("./routes/user");
const razorpay = require("razorpay");
const crypto = require("crypto");
const User = require("./Models/User");
const CartModel = require("./Models/Cart");
// Middleware
app.use(cors());
// User Route
app.use("/api/user", userRoute);

app.use(bodyParser.json());
app.use(express.json());
// Routes

// Restro Route
app.use("/api/restaurant", restaurantRoutes);

// Menu Route
app.use("/api/upload", restromenu);

// Cart Route
app.use("/api/cart", Cart);

// Dashboard Route
app.use("/api/dashboard", dashboardRoute);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Hey There!",
  });
});

// RazerPay Logic
// Razorpay Instance
const instance = new razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.SECRET,
});

// Razorpay Payment Schema
const paymentschema = new mongoose.Schema(
  {
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentschema);

// Checkout route
app.post("/checkout", async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };
    const order = await instance.orders.create(options);
    res.json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to complete checkout" });
  }
});

// Payment Verification Route
app.post("/paymentverification", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userId,
    username,
    amount,
  } = req.body;
  const generated_signature = crypto
    .createHmac("sha256", process.env.SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generated_signature === razorpay_signature) {
    const payment = new Payment({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    await payment.save();

    // Adding to the DataBase
    const timestamp = new Date();
    const date = timestamp.toISOString().split("T")[0];

    // Fetch the user and their cart
    const user = await CartModel.find({ Username: username });
    const userModel = await User.findOne({ clerkUserId: userId });

    // Check if user or userModel is not found
    if (!user) {
      return res.status(404).json({ error: "Cart not found" });
    }
    if (!userModel) {
      return res.status(404).json({ error: "User not found" });
    }

    // Prepare order details
    const orderDetails = {
      products: user.map((item) => ({
        productId: item.productId,
        dishName: item.dishName,
        image: item.image,
        price: item.price,
      })),
      totalCost: amount,
      purchasedAt: date,
    };
    console.log(user);
    // Initialize and update orderHistory
    userModel.orderHistory = userModel.orderHistory || [];
    userModel.orderHistory.push(orderDetails);

    // Update totalSpend
    userModel.totalSpend = (userModel.totalSpend || 0) + orderDetails.totalCost;

    // Save the user document
    await userModel.save();

    // Respond with success message
    res.json({
      success: true,
      message: "Checkout successful, order added to history",
    });
  } else {
    res.json({ success: false });
  }
});

// Email route for feedback
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
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
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
// Email route for order comfirmation
app.post("/orderConfirm", (req, res) => {
  const { UserName, email, amount } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Order Confirmation `,
    text: "order confirmation",
    html: `<p><strong>Thank You For Purchasing From TasteBudsTreat</strong></p>
           <p>You're order will be there in short time!</p>
           <p>You're Total is ${amount}</p>
           <p><strong>Regards TasteBudsTreat :)</p>`,
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
