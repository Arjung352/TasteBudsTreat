const express = require("express");
const router = express.Router();
const User = require("../Models/User");

// Extracting Total number of user's
router.get("/get-user", async (req, res) => {
  try {
    const userData = await User.find({});
    console.log(userData);
    res.status(200).json({ data: userData });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
module.exports = router;
