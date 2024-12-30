const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bodyParser = require("body-parser");
const { Webhook } = require("svix");

router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
      return res.status(400).json({ error: "WebHook secret is required" });
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let event;
    try {
      event = wh.verify(payload, headers);
    } catch (err) {
      return res.status(400).json({ error: "Webhook verification failed" });
    }

    if (event.type === "user.created") {
      const userData = event.data;

      // Log the event data for debugging purposes
      console.log("Received user created event:", userData);

      // Extract email safely
      const userEmail =
        userData.email_addresses && userData.email_addresses.length > 0
          ? userData.email_addresses[0].email_address
          : "default@example.com";

      const userName = userData.username || userData.first_name || userEmail;

      // Check if the user already exists
      const existingUser = await User.findOne({ clerkUserId: userData.id });
      if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
      }

      const newUser = new User({
        clerkUserId: userData.id,
        userName: userName,
        emailId: userEmail,
        img: userData.image_url, // Storing the profile image URL
      });

      try {
        await newUser.save();
        return res.status(200).json({ message: "User created successfully" });
      } catch (error) {
        return res.status(500).json({ error: "Failed to save user" });
      }
    } else {
      return res
        .status(400)
        .json({ error: "Event type is not 'user.created'" });
    }
  }
);

module.exports = router;
