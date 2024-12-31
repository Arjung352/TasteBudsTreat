const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bodyParser = require("body-parser");
const { Webhook } = require("svix");

router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const secret = process.env.CLERK_WEBHOOK_SECRET;

    if (!secret) {
      throw new Error("Webhook secret needed!!");
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(secret);
    let evt;
    try {
      evt = wh.verify(payload, headers);
    } catch (err) {
      console.error("Verification Error:", err.message);
      return res.status(400).json({
        message: "Webhook verification failed",
        error: err.message,
      });
    }

    if (evt.type === "user.created") {
      const newUser = new User({
        clerkUserId: evt.data.id,
        userName:
          evt.data.username || evt.data.email_addresses[0].email_address,
        emailId: evt.data.email_addresses[0].email_address,
        img: evt.data.profile_img_url,
      });
      await newUser.save();
    }
    console.log("event Data->", evt.data);

    return res.status(200).json({
      message: "Webhook received",
    });
  }
);

module.exports = router;
