const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bodyParser = require("body-parser");
router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
      throw new Error("WebHook secret is required");
    }
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let event;
    try {
      event = wh.verify(payload, headers);
    } catch (err) {
      res.status(400).json({});
    }
    if (event.type === "user.created") {
      const newUser = new User({
        clerkUserId: event.data.id,
        userName:
          event.data.username || event.data.email_addresses[0].email_address,
        email: event.data.email_addresses[0].email_address,
      });
      await newUser.save();
    }
    return res.status(200).json({ message: "User created" });
  }
);
module.exports = router;
