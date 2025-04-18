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

    const payload = req.body.toString();
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
    if (evt.type === "user.deleted") {
      try {
        const deletedUser = await User.findOneAndDelete({
          clerkUserId: evt.data.id,
        });
        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        res.json(400).send(error);
      }
    }

    return res.status(200).json({
      message: "Webhook received",
    });
  }
);

module.exports = router;
