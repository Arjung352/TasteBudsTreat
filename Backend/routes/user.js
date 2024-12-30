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
      console.error("Webhook secret is not set in environment variables.");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);

    let event;
    try {
      event = wh.verify(payload, headers);
    } catch (err) {
      console.error("Webhook verification failed:", err.message);
      return res.status(400).json({ error: "Invalid webhook signature" });
    }

    if (event.type === "user.created") {
      try {
        const newUser = new User({
          clerkUserId: event.data.id,
          userName:
            event.data.username || event.data.email_addresses[0].email_address,
          emailId: event.data.email_addresses[0].email_address,
        });
        await newUser.save();
        return res.status(201).json({ message: "User created successfully" });
      } catch (err) {
        console.error("Database operation failed:", err.message);
        return res.status(500).json({ error: "Failed to save user" });
      }
    } else {
      return res.status(400).json({ error: "Unsupported event type" });
    }
  }
);

module.exports = router;
